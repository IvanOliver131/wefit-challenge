import { Alert, Linking, Text, TouchableOpacity, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

import { DetailsParams } from "../../@types/navigation";
import { Background } from "../../components/Background";

import { styles, stylesDark } from "./styles";
import { THEME } from "../../theme";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFavoritesRepositories } from "../../context/favoritesRepositories";
import { RepositoryProps } from "../../components/CardRepository";
import { SaveDataInStorage } from "../../utils/SaveDataInStorage";

export function Details() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state: any) => state.darkMode);
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
      <View style={darkMode ? stylesDark.container : styles.container}>
        <View style={darkMode ? stylesDark.details : styles.details}>
          <Text style={darkMode ? stylesDark.title : styles.title}>
            {fullNames[0]}/
            <Text style={darkMode ? stylesDark.titleBold : styles.titleBold}>
              {fullNames[1]}
            </Text>
          </Text>
          <Text style={darkMode ? stylesDark.description : styles.description}>
            {repository.description}
          </Text>

          <View
            style={darkMode ? stylesDark.codeLanguage : styles.codeLanguage}
          >
            <Ionicons
              name="ellipse"
              color={THEME.COLORS.POINTER}
              size={12}
              style={styles.child}
            />
            <Text style={darkMode ? stylesDark.language : styles.language}>
              {repository.language}
            </Text>
          </View>
        </View>
        <View style={darkMode ? stylesDark.footer : styles.footer}>
          <TouchableOpacity
            style={darkMode ? stylesDark.urlContainer : styles.urlContainer}
            onPress={() => handleOpenURL(repository.svn_url)}
          >
            <Text style={darkMode ? stylesDark.urlText : styles.urlText}>
              Ver repositório
            </Text>
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
