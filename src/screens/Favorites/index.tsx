import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { Background } from "../../components/Background";
import {
  CardRepository,
  RepositoryProps,
} from "../../components/CardRepository";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { setFavoritesRepositories } from "../../context/favoritesRepositories";

import { setShowNavbar } from "../../context/showNavbar";
import { GetDataInStorage } from "../../utils/GetDataInStorage";

import { styles, stylesDark } from "./styles";

export function Favorites() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { darkMode } = useSelector((state: any) => state.darkMode);
  const { favoritesRepositories } = useSelector(
    (state: any) => state.favoritesRepositories
  );

  async function getStorageFavoritesRepositories() {
    const storageFavoritesRepositories = await GetDataInStorage("favorites");
    if (
      storageFavoritesRepositories &&
      storageFavoritesRepositories.length > 0
    ) {
      dispatch(setFavoritesRepositories(storageFavoritesRepositories));
    }
  }

  useEffect(() => {
    getStorageFavoritesRepositories();
  }, [favoritesRepositories]);

  function showModal(show: boolean) {
    setModal(show);
    dispatch(setShowNavbar(false));
  }

  return (
    <Background>
      <Header showModal={showModal} />
      {favoritesRepositories.length === 0 ? (
        <View style={styles.container}>
          <Text
            style={
              darkMode
                ? stylesDark.textFavoriteListEmpty
                : styles.textFavoriteListEmpty
            }
          >
            Nenhum repositório salvo nos favoritos... 😅
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoritesRepositories}
          keyExtractor={(item: RepositoryProps) => String(item.id)}
          renderItem={({ item }) => (
            <CardRepository data={item} favoriteScreen={true} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      )}
      <Modal show={modal} close={() => setModal(false)} />
    </Background>
  );
}
