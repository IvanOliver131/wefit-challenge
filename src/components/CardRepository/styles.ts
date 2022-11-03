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
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 12,
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
    gap: 2,
  },
  buttonText: {
    color: THEME.COLORS.YELLOW,
  },
  favoriteCount: {
    alignItems: "center",
    flexDirection: "row",
    gap: 2,
  },
  codeLanguage: {
    alignItems: "center",
    flexDirection: "row",
    gap: 2,
  },
  child: {
    marginRight: 6,
  },
  childText: {
    color: THEME.COLORS.SUB_TEXT,
  },
});
