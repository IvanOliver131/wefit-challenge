import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/context/store";
import { ThemeProvider } from "styled-components";

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

import { THEME_LIGHT } from "./src/theme/light";
import { useEffect, useState } from "react";
import { GetDataInStorage } from "./src/utils/GetDataInStorage";
import { THEME_DARK } from "./src/theme/dark";

export default function App() {
  const [theme, setTheme] = useState(THEME_DARK);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  // async function getTheme() {
  //   const isDarkMode = await GetDataInStorage("darkmode");
  //   if (isDarkMode) {
  //     setTheme(THEME_DARK);
  //   } else {
  //     setTheme(THEME_LIGHT);
  //   }
  // }

  // useEffect(() => {
  //   getTheme();
  // }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Background>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" />

          {fontsLoaded ? <Routes /> : <Loading />}
        </Background>
      </ThemeProvider>
    </Provider>
  );
}
