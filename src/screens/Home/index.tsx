import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

import { Background } from "../../components/Background";
import {
  CardRepository,
  RepositoryProps,
} from "../../components/CardRepository";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { setFavoritesRepositories } from "../../context/favoritesRepositories";

import { styles } from "./styles";
import { setShowNavbar } from "../../context/showNavbar";
import { SaveDataInStorage } from "../../utils/SaveDataInStorage";
import { THEME } from "../../theme";

export function Home() {
  const dispatch = useDispatch();
  const { username } = useSelector((state: any) => state.username);
  const { favoritesRepositories } = useSelector(
    (state: any) => state.favoritesRepositories
  );
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [modal, setModal] = useState(false);

  async function getRepos() {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      setRepositories(data);
    } catch (error) {
      setRepositories([]);
    }
  }

  useEffect(() => {
    getRepos();
  }, [username]);

  function showModal(show: boolean) {
    setModal(show);
    dispatch(setShowNavbar(false));
  }

  async function handleRemoveRepositoryInFavoriteList(
    repository: RepositoryProps
  ) {
    const newFavorites = favoritesRepositories.filter(
      (favoriteRepository: RepositoryProps) =>
        favoriteRepository.id !== repository.id
    );

    await SaveDataInStorage("favorites", [...newFavorites]);
    dispatch(setFavoritesRepositories([...newFavorites]));
  }

  async function handleAddOrRemoveToFavoriteList(repository: RepositoryProps) {
    for (const favoriteRepository of favoritesRepositories) {
      if (favoriteRepository.id === repository.id) {
        handleRemoveRepositoryInFavoriteList(repository);
        return;
      }
    }

    await SaveDataInStorage("favorites", [
      ...favoritesRepositories,
      repository,
    ]);
    dispatch(setFavoritesRepositories([...favoritesRepositories, repository]));
  }

  return (
    <Background>
      <Header showModal={showModal} />
      {repositories.length === 0 ? (
        <View style={styles.containerEmpty}>
          <Text style={styles.textFavoriteListEmpty}>
            Nenhum repositório encontrado... Busque por um repositório clicando
            no icone acima{" "}
            <Ionicons name="settings" size={20} color={THEME.COLORS.TEXT} />
          </Text>
        </View>
      ) : (
        <FlatList
          data={repositories}
          keyExtractor={(item: RepositoryProps) => String(item.id)}
          renderItem={({ item }) => (
            <CardRepository
              data={item}
              handleAddOrRemoveToFavoriteList={handleAddOrRemoveToFavoriteList}
              favoriteScreen={false}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      )}

      <Modal show={modal} close={() => setModal(false)} />
    </Background>
  );
}
