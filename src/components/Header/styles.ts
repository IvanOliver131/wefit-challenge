import { StyleSheet } from "react-native";
import { THEME, THEME_DARK } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: THEME.COLORS.BACKGROUND_NAVBAR_HEADER,
    borderBottomWidth: 0.5,
    borderBottomColor: THEME.COLORS.DIVIDER,
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
});

export const stylesDark = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: THEME_DARK.COLORS.BACKGROUND_NAVBAR_HEADER,
    borderBottomWidth: 0.5,
    borderBottomColor: THEME_DARK.COLORS.DIVIDER,
  },
  title: {
    color: THEME_DARK.COLORS.TEXT,
    fontSize: THEME_DARK.FONT_SIZE.LG,
    fontFamily: THEME_DARK.FONT_FAMILY.SEMI_BOLD,
  },
});
