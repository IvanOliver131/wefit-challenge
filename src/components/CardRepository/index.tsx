import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import miniLogo from "../../assets/mini-logo.png";
import { THEME } from "../../theme";

import { styles } from "./styles";

export interface RepositoryProps {
  id: number;
  full_name: string;
  description: string;
  watchers_count: string;
  language: string;
  svn_url: string;
}

interface CardRepositoryProps {
  data: RepositoryProps;
  handleAddToFavoriteList?: (repository: RepositoryProps) => void;
  favoriteScreen: boolean;
}

export function CardRepository({
  data,
  handleAddToFavoriteList,
  favoriteScreen,
}: CardRepositoryProps) {
  const navigation = useNavigation();
  const re = /\s*\/\s*/;
  const fullNames = data.full_name.split(re);

  function handleOpenDetails(data: RepositoryProps) {
    navigation.navigate("Details", data);
  }

  return (
    <TouchableOpacity onPress={() => handleOpenDetails(data)}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text numberOfLines={1}>
            {fullNames[0]}/<Text style={styles.titleBold}>{fullNames[1]}</Text>
          </Text>
          <Image source={miniLogo} style={styles.logo} />
        </View>
        <View style={styles.divider} />
        <Text style={styles.description} numberOfLines={2}>
          {data.description}
        </Text>
        <View style={styles.footer}>
          {!favoriteScreen && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddToFavoriteList(data)}
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
            <Text style={styles.childText}>{data.language}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
