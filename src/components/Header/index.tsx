import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDarkMode } from "../../context/darkMode";
import { THEME, THEME_DARK } from "../../theme";
import { SaveDataInStorage } from "../../utils/SaveDataInStorage";

import { styles, stylesDark } from "./styles";

interface HeaderProps {
  showModal: (modalState: boolean) => void;
}

export function Header({ showModal }: HeaderProps) {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state: any) => state.darkMode);

  function handleChangeMode() {
    dispatch(setDarkMode(!darkMode));
    SaveDataInStorage("darkmode", !darkMode);
  }

  return (
    <View style={darkMode ? stylesDark.container : styles.container}>
      <TouchableOpacity onPress={() => handleChangeMode()}>
        <Ionicons
          name="moon"
          size={20}
          color={darkMode ? THEME_DARK.COLORS.TEXT : THEME.COLORS.TEXT}
        />
      </TouchableOpacity>
      <Text style={darkMode ? stylesDark.title : styles.title}>WeFit</Text>
      <TouchableOpacity onPress={() => showModal(true)}>
        <Ionicons
          name="settings"
          size={20}
          color={darkMode ? THEME_DARK.COLORS.TEXT : THEME.COLORS.TEXT}
        />
      </TouchableOpacity>
    </View>
  );
}
