import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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

export function Home() {
  const dispatch = useDispatch();
  const { username } = useSelector((state: any) => state.username);
  const { favoritesRepositories } = useSelector(
    (state: any) => state.favoritesRepositories
  );
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [modal, setModal] = useState(false);

  function handleAddToFavoriteList(repository: RepositoryProps) {
    for (const favoriteRepository of favoritesRepositories) {
      if (favoriteRepository.id === repository.id) {
        return Alert.alert(
          "Repositório já adicionado",
          "O repositório favoritado já foi selecionado e está dentro dos seus favoritos",
          [{ text: "OK", onPress: () => console.log() }]
        );
      }
    }
    dispatch(setFavoritesRepositories([...favoritesRepositories, repository]));
  }

  async function getRepos() {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setRepositories(data);
    } catch (error) {
      setRepositories([]);
      Alert.alert("Nenhum repositório encontrado");
    }
  }

  useEffect(() => {
    getRepos();
  }, [username]);

  return (
    <Background>
      <Header setModal={setModal} />
      {repositories.length === 0 ? (
        <View style={styles.containerEmpty}>
          <Text style={styles.textFavoriteListEmpty}>
            Nenhum repositório encontrado... 😅
          </Text>
        </View>
      ) : (
        <FlatList
          data={repositories}
          keyExtractor={(item: RepositoryProps) => String(item.id)}
          renderItem={({ item }) => (
            <CardRepository
              data={item}
              handleAddToFavoriteList={handleAddToFavoriteList}
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
