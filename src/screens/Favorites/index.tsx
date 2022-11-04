import { useState } from "react";
import { FlatList, Text, View } from "react-native";

import { useSelector } from "react-redux";

import { Background } from "../../components/Background";
import {
  CardRepository,
  RepositoryProps,
} from "../../components/CardRepository";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";

import { styles } from "./styles";

export function Favorites() {
  const [modal, setModal] = useState(false);
  const { favoritesRepositories } = useSelector(
    (state: any) => state.favoritesRepositories
  );

  return (
    <>
      {favoritesRepositories.length === 0 ? (
        <View style={styles.container}>
          <Text style={styles.textFavoriteListEmpty}>
            Nenhum repositório salvo nos favoritos... 😅
          </Text>
        </View>
      ) : (
        <Background>
          <Header setModal={setModal} />
          <FlatList
            data={favoritesRepositories}
            keyExtractor={(item: RepositoryProps) => String(item.id)}
            renderItem={({ item }) => (
              <CardRepository data={item} favoriteScreen={true} />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
          />

          <Modal show={modal} close={() => setModal(false)} />
        </Background>
      )}
    </>
  );
}
