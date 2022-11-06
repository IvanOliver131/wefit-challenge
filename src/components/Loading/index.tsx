import { View, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { THEME, THEME_DARK } from "../../theme";

import { styles } from "./styles";

export function Loading() {
  const { darkMode } = useSelector((state: any) => state.darkMode);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={darkMode ? THEME_DARK.COLORS.TEXT : THEME.COLORS.TEXT}
        size={64}
      />
    </View>
  );
}
