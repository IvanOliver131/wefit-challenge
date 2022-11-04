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

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Provider store={store}>
      <Background>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />

        {fontsLoaded ? <Routes /> : <Loading />}
      </Background>
    </Provider>
  );
}
