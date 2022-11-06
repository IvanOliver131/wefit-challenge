import { StyleSheet } from "react-native";
import { THEME } from "../../theme";
import { THEME_DARK } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
});

export const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_DARK.COLORS.BACKGROUND,
  },
});
