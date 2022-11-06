import { StyleSheet } from "react-native";
import { THEME_DARK } from "../../theme";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  details: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: THEME.COLORS.BACKGROUND_DETAILS_INFO,
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    marginBottom: 16,
  },
  titleBold: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  description: {
    color: THEME.COLORS.SUB_TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    marginBottom: 16,
  },
  codeLanguage: {
    alignItems: "center",
    flexDirection: "row",
  },
  language: {
    color: THEME.COLORS.SUB_TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "100%",
    backgroundColor: THEME.COLORS.WHITE,
    bottom: 0,
    position: "absolute",
  },
  urlContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    marginTop: 24,
  },
  urlText: {
    color: THEME.COLORS.BUTTON_TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    textTransform: "uppercase",
    marginRight: 10,
  },
  button: {
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: THEME.COLORS.YELLOW,
    borderRadius: 4,
    padding: 6,
    gap: 2,
  },
  child: {
    marginRight: 6,
  },
  buttonText: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    textTransform: "uppercase",
    marginRight: 10,
  },
  desfavoriteButton: {
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: THEME.COLORS.WHITE,
    borderColor: THEME.COLORS.TEXT,
    borderRadius: 4,
    padding: 6,
    gap: 2,
  },
});

export const stylesDark = StyleSheet.create({
  details: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: THEME_DARK.COLORS.BACKGROUND_DETAILS_INFO,
  },
  title: {
    color: THEME_DARK.COLORS.TEXT,
    fontFamily: THEME_DARK.FONT_FAMILY.REGULAR,
    fontSize: THEME_DARK.FONT_SIZE.MD,
    marginBottom: 16,
  },
  description: {
    color: THEME_DARK.COLORS.SUB_TEXT,
    fontFamily: THEME_DARK.FONT_FAMILY.REGULAR,
    fontSize: THEME_DARK.FONT_SIZE.MD,
    marginBottom: 16,
  },
  codeLanguage: {
    alignItems: "center",
    flexDirection: "row",
  },
  language: {
    color: THEME_DARK.COLORS.SUB_TEXT,
    fontFamily: THEME_DARK.FONT_FAMILY.REGULAR,
    fontSize: THEME_DARK.FONT_SIZE.MD,
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "100%",
    backgroundColor: THEME_DARK.COLORS.BACKGROUND_CARD,
    bottom: 0,
    position: "absolute",
  },
  urlText: {
    color: THEME_DARK.COLORS.BUTTON_TEXT,
    fontFamily: THEME_DARK.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME_DARK.FONT_SIZE.MD,
    textTransform: "uppercase",
    marginRight: 10,
  },
  button: {
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: THEME_DARK.COLORS.YELLOW,
    borderRadius: 4,
    padding: 6,
    gap: 2,
  },
  buttonText: {
    color: THEME_DARK.COLORS.TEXT,
    fontFamily: THEME_DARK.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME_DARK.FONT_SIZE.MD,
    textTransform: "uppercase",
    marginRight: 10,
  },
  desfavoriteButton: {
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: THEME_DARK.COLORS.TEXT,
    borderRadius: 4,
    padding: 6,
    gap: 2,
  },
});
