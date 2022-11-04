import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.WHITE,
    height: 186,
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
  titleBold: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  divider: {
    borderBottomColor: THEME.COLORS.CAPTION_300,
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
  buttonText: {
    color: THEME.COLORS.YELLOW,
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
