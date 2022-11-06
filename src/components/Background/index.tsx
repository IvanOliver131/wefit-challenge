import { View } from "react-native";
import { useSelector } from "react-redux";

import { styles, stylesDark } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  const { darkMode } = useSelector((state: any) => state.darkMode);

  return (
    <View style={darkMode ? stylesDark.container : styles.container}>
      {children}
    </View>
  );
}
