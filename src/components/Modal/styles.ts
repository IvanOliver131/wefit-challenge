import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
  },
  modal: {
    bottom: 0,
    position: "absolute",
    height: "30%",
    backgroundColor: "#fff",
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
  },
  inputUsername: {
    marginTop: 10,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  buttonsFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  btnCancel: {
    width: "50%",
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
    width: "50%",
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
