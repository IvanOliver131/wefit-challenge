import { Alert, Linking, Text, TouchableOpacity, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

import { DetailsParams } from "../../@types/navigation";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFavoritesRepositories } from "../../context/favoritesRepositories";
import { RepositoryProps } from "../../components/CardRepository";
import { SaveDataInStorage } from "../../utils/SaveDataInStorage";

export function Details() {
  const dispatch = useDispatch();
  const route = useRoute();
  const [isFavorite, setFavorite] = useState(false);
  const repository = route.params as DetailsParams;
  const { favoritesRepositories } = useSelector(
    (state: any) => state.favoritesRepositories
  );

  const re = /\s*\/\s*/;
  const fullNames = repository.full_name.split(re);

  useEffect(() => {
    for (const favoriteRepository of favoritesRepositories) {
      if (favoriteRepository.id === repository.id) {
        setFavorite(true);
      }
    }
  }, []);

  async function handleRemoveFavorite(id: number) {
    const newFavorites = favoritesRepositories.filter(
      (repository: RepositoryProps) => repository.id !== id
    );

    await SaveDataInStorage("favorites", [...newFavorites]);
    dispatch(setFavoritesRepositories([...newFavorites]));
    setFavorite(false);
  }

  async function handleAddToFavoriteList(repository: RepositoryProps) {
    await SaveDataInStorage("favorites", [
      ...favoritesRepositories,
      repository,
    ]);
    dispatch(setFavoritesRepositories([...favoritesRepositories, repository]));
    setFavorite(true);
  }

  async function handleOpenURL(url: string) {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`URL não suportada: ${url}`);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.details}>
          <Text style={styles.title}>
            {fullNames[0]}/<Text style={styles.titleBold}>{fullNames[1]}</Text>
          </Text>
          <Text style={styles.description}>{repository.description}</Text>

          <View style={styles.codeLanguage}>
            <Ionicons
              name="ellipse"
              color={THEME.COLORS.POINTER}
              size={12}
              style={styles.child}
            />
            <Text style={styles.language}>{repository.language}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.urlContainer}
            onPress={() => handleOpenURL(repository.svn_url)}
          >
            <Text style={styles.urlText}>Ver repositório</Text>
            <Ionicons
              name="link-outline"
              color={THEME.COLORS.BUTTON_TEXT}
              size={24}
              style={styles.child}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[isFavorite ? styles.desfavoriteButton : styles.button]}
            onPress={() => {
              isFavorite
                ? handleRemoveFavorite(repository.id)
                : handleAddToFavoriteList(repository);
            }}
          >
            {isFavorite ? (
              <Text style={styles.buttonText}>Desfavoritar</Text>
            ) : (
              <Text style={styles.buttonText}>Favoritar</Text>
            )}
            <Ionicons
              name="star"
              color={THEME.COLORS.TEXT}
              size={20}
              style={styles.child}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
}
