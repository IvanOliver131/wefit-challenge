import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
  //  ************* FALTA IMPLEMENTAR
  // const navigation = useNavigation();

  // function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
  //   navigation.navigate("game", { id, title, bannerUrl });
  // }

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

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      });
  }, [username]);

  return (
    <Background>
      <Header setModal={setModal} />
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

      <Modal show={modal} close={() => setModal(false)} />
    </Background>
  );
}
