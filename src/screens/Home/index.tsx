import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Background } from "../../components/Background";
import {
  CardRepository,
  RepositoryProps,
} from "../../components/CardRepository";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function Home() {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  //  ************* FALTA IMPLEMENTAR
  // const navigation = useNavigation();

  // function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
  //   navigation.navigate("game", { id, title, bannerUrl });
  // }

  // function handleAddToFavoriteList(repository: RepositoryProps) {
  //   let lista.push(repository);
  // }

  useEffect(() => {
    fetch("https://api.github.com/users/facebook/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRepositories(data);
      });
  }, []);

  return (
    <Background>
      <Header
        title="WeFit"
        iconName="settings"
        sizeIcon={20}
        colorIcon="black"
      />
      <FlatList
        data={repositories}
        keyExtractor={(item: RepositoryProps) => String(item.id)}
        renderItem={({ item }) => (
          <CardRepository
            data={item}
            // onPress={() => {
            //   handleOpenGame(item);
            // }}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </Background>
  );
}
