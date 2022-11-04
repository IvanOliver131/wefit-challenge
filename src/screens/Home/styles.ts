import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

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
  },
  contentList: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
