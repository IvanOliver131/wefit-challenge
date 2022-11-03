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
}

interface CardRepositoryProps {
  data: RepositoryProps;
}

export function CardRepository({ data }: CardRepositoryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{data.full_name}</Text>
        <Image source={miniLogo} style={styles.logo} />
      </View>
      <View style={styles.divider} />
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="star"
            color={THEME.COLORS.YELLOW}
            size={20}
            style={styles.child}
          />
          <Text style={styles.buttonText}>Favoritar</Text>
        </TouchableOpacity>
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
            name="star"
            color={THEME.COLORS.YELLOW}
            size={20}
            style={styles.child}
          />
          <Text style={styles.childText}>{data.language}</Text>
        </View>
      </View>
    </View>
  );
}
