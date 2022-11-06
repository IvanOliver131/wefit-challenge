import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/context/store";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";
import { useEffect, useState } from "react";
import { GetDataInStorage } from "./src/utils/GetDataInStorage";
import { SaveDataInStorage } from "./src/utils/SaveDataInStorage";

export default function App() {
  // const [isDark, setIsDark] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  // async function getTheme() {
  //   const isDarkMode = await GetDataInStorage("darkmode");

  //   if (isDarkMode) {
  //     setIsDark(true);
  //     SaveDataInStorage("darkmode", true);
  //   } else {
  //     setIsDark(false);
  //     SaveDataInStorage("darkmode", false);
  //   }
  // }

  // useEffect(() => {
  //   getTheme();
  // }, [isDark]);

  return (
    <Provider store={store}>
      <Background>{fontsLoaded ? <Routes /> : <Loading />}</Background>
    </Provider>
  );
}
