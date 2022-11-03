import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Favorites } from "../screens/Favorites";
import { Home } from "../screens/Home";
import { THEME } from "../theme";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Respositórios") {
            iconName = "logo-github";
          } else if (route.name === "Favoritos") {
            iconName = "star";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: THEME.COLORS.ACTIVE,
        tabBarInactiveTintColor: THEME.COLORS.DESACTIVE,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Respositórios" component={Home} />
      <Tab.Screen name="Favoritos" component={Favorites} />
    </Tab.Navigator>
  );
}
