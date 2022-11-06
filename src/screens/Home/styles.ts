import { StyleSheet } from "react-native";
import { THEME, THEME_DARK } from "../../theme";

export const styles = StyleSheet.create({
  containerEmpty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  textFavoriteListEmpty: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT,
    textAlign: "center",
  },
  contentList: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export const stylesDark = StyleSheet.create({
  textFavoriteListEmpty: {
    fontSize: THEME_DARK.FONT_SIZE.MD,
    fontFamily: THEME_DARK.FONT_FAMILY.SEMI_BOLD,
    color: THEME_DARK.COLORS.TEXT,
    textAlign: "center",
  },
});
