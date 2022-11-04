import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";

interface HeaderProps {
  showModal: (modalState: boolean) => void;
}

export function Header({ showModal }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WeFit</Text>
      <TouchableOpacity onPress={() => showModal(true)}>
        <Ionicons name="settings" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}
