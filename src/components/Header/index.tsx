import { View, Text, ViewProps } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";

interface Props extends ViewProps {
  title: string;
  iconName: string;
  sizeIcon: number;
  colorIcon: string;
}

export function Header({
  title,
  sizeIcon,
  iconName,
  colorIcon,
  ...rest
}: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name={iconName} size={sizeIcon} color={colorIcon} />
    </View>
  );
}
