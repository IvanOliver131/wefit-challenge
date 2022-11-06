import { StyleSheet } from "react-native";
import { THEME, THEME_DARK } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: THEME.COLORS.SCREEN_MODAL,
    position: "absolute",
  },
  modal: {
    bottom: 0,
    position: "absolute",
    height: "60%",
    backgroundColor: THEME.COLORS.BACKGROUND_MODAL,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 5,
  },
  title: {
    marginTop: 50,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT,
  },
  inputUsername: {
    marginTop: 10,
    backgroundColor: THEME.COLORS.BACKGROUND_INPUT_MODAL,
    color: THEME.COLORS.TEXT,
  },
  buttonsFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnCancel: {
    width: "48%",
    height: 50,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.WHITE,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textBtnCancel: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.BUTTON_TEXT,
  },
  btn: {
    width: "48%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#9b59b6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textBtn: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.WHITE,
  },
});

export const stylesDark = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: THEME_DARK.COLORS.SCREEN_MODAL,
    position: "absolute",
  },
  modal: {
    bottom: 0,
    position: "absolute",
    height: "60%",
    backgroundColor: THEME_DARK.COLORS.BACKGROUND_MODAL,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },

  title: {
    marginTop: 50,
    fontSize: THEME_DARK.FONT_SIZE.MD,
    fontFamily: THEME_DARK.FONT_FAMILY.REGULAR,
    color: THEME_DARK.COLORS.TEXT,
  },
  inputUsername: {
    marginTop: 10,
    backgroundColor: THEME_DARK.COLORS.BACKGROUND_INPUT_MODAL,
    color: THEME_DARK.COLORS.TEXT,
  },

  btnCancel: {
    width: "48%",
    height: 50,
    borderRadius: 10,
    backgroundColor: THEME_DARK.COLORS.BACKGROUND_CARD,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textBtnCancel: {
    fontFamily: THEME_DARK.FONT_FAMILY.SEMI_BOLD,
    color: THEME_DARK.COLORS.BUTTON_TEXT,
  },
  btn: {
    width: "48%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textBtn: {
    fontFamily: THEME_DARK.FONT_FAMILY.SEMI_BOLD,
    color: THEME_DARK.COLORS.BUTTON_TEXT,
  },
});
