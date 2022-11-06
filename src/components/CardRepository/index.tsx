import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

import miniLogo from "../../assets/mini-logo.png";
import { THEME } from "../../theme";

import { styles, stylesDark } from "./styles";

export interface RepositoryProps {
  id: number;
  full_name: string;
  description: string;
  watchers_count: string;
  language: string;
  svn_url: string;
  isFavorited: boolean;
}

interface CardRepositoryProps {
  data: RepositoryProps;
  handleAddOrRemoveToFavoriteList?: (repository: RepositoryProps) => void;
  favoriteScreen: boolean;
}

export function CardRepository({
  data,
  handleAddOrRemoveToFavoriteList,
  favoriteScreen,
}: CardRepositoryProps) {
  const { darkMode } = useSelector((state: any) => state.darkMode);
  const { favoritesRepositories } = useSelector(
    (state: any) => state.favoritesRepositories
  );
  const navigation = useNavigation();
  const re = /\s*\/\s*/;
  const fullNames = data.full_name.split(re);

  function handleOpenDetails(data: RepositoryProps) {
    navigation.navigate("Details", data);
  }

  return (
    <TouchableOpacity onPress={() => handleOpenDetails(data)}>
      <View style={darkMode ? stylesDark.container : styles.container}>
        <View style={styles.header}>
          <Text
            numberOfLines={1}
            style={darkMode ? stylesDark.title : styles.title}
          >
            {fullNames[0]}/
            <Text style={darkMode ? stylesDark.titleBold : styles.titleBold}>
              {fullNames[1]}
            </Text>
          </Text>
          <Image source={miniLogo} style={styles.logo} />
        </View>
        <View style={styles.divider} />
        <Text style={styles.description} numberOfLines={2}>
          {data.description}
        </Text>
        <View style={styles.footer}>
          {!favoriteScreen && (
            <>
              {favoritesRepositories.find(
                (favoriteRepository: RepositoryProps) =>
                  favoriteRepository.id === data.id
              ) ? (
                <TouchableOpacity
                  style={styles.buttonDesfavorite}
                  onPress={() => handleAddOrRemoveToFavoriteList(data)}
                >
                  <Ionicons
                    name="star"
                    color={THEME.COLORS.TEXT}
                    size={20}
                    style={styles.child}
                  />
                  <Text style={styles.buttonTextDesfavorite}>Desfavoritar</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleAddOrRemoveToFavoriteList(data)}
                >
                  <Ionicons
                    name="star"
                    color={THEME.COLORS.YELLOW}
                    size={20}
                    style={styles.child}
                  />
                  <Text style={styles.buttonText}>Favoritar</Text>
                </TouchableOpacity>
              )}
            </>
          )}
          <View style={styles.favoriteCount}>
            <Ionicons
              name="star"
              color={THEME.COLORS.YELLOW}
              size={20}
              style={styles.child}
            />
            <Text style={styles.childText}>{data.watchers_count}</Text>
          </View>
          <View style={styles.codeLanguage}>
            <Ionicons
              name="ellipse"
              color={THEME.COLORS.POINTER}
              size={16}
              style={styles.child}
            />
            <Text style={styles.childText}>
              {data.language ? data.language : "Indefinida"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
