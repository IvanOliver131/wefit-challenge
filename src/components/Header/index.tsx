import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";

interface HeaderProps {
  setModal: (modalState: boolean) => void;
}

export function Header({ setModal }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WeFit</Text>
      <TouchableOpacity onPress={() => setModal(true)}>
        <Ionicons name="settings" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}
