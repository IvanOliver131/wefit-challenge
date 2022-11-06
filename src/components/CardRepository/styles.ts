import { StyleSheet } from "react-native";
import { THEME, THEME_DARK } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BACKGROUND_CARD,
    height: 190,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    elevation: 5,
    shadowColor: "black",
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    paddingVertical: 12,
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  titleBold: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT,
  },
  divider: {
    borderBottomColor: THEME.COLORS.DIVIDER,
    borderBottomWidth: 1,
  },
  description: {
    paddingVertical: 12,
    color: THEME.COLORS.SUB_TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    height: 60,
  },
  footer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 12,
  },
  logo: {
    width: 36,
    height: 36,
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FAF3DC",
    borderRadius: 4,
    padding: 6,
  },
  buttonDesfavorite: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: THEME.COLORS.WHITE,
    borderWidth: 1,
    borderColor: THEME.COLORS.TEXT,
    borderRadius: 4,
    padding: 6,
  },
  buttonText: {
    color: THEME.COLORS.YELLOW,
  },
  buttonTextDesfavorite: {
    color: THEME.COLORS.TEXT,
  },
  favoriteCount: {
    alignItems: "center",
    flexDirection: "row",
  },
  codeLanguage: {
    alignItems: "center",
    flexDirection: "row",
  },
  child: {
    marginRight: 6,
  },
  childText: {
    color: THEME.COLORS.SUB_TEXT,
  },
});

export const stylesDark = StyleSheet.create({
  container: {
    backgroundColor: THEME_DARK.COLORS.BACKGROUND_CARD,
    height: 190,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    elevation: 5,
    shadowColor: "black",
  },
  title: {
    color: THEME_DARK.COLORS.TEXT,
    fontFamily: THEME_DARK.FONT_FAMILY.REGULAR,
  },
  titleBold: {
    fontFamily: THEME_DARK.FONT_FAMILY.BOLD,
    color: THEME_DARK.COLORS.TEXT,
  },
  divider: {
    borderBottomColor: THEME_DARK.COLORS.DIVIDER,
    borderBottomWidth: 1,
  },
});
