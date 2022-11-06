import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

import { THEME } from "../../theme";

import { Favorites } from "../../screens/Favorites";
import { Home } from "../../screens/Home";

const Tab = createBottomTabNavigator();

export function Tabs() {
  const { showNavbar } = useSelector((state: any) => state.showNavbar);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          const routes = {
            Repositórios: "logo-github",
            Favoritos: "star",
          };

          iconName = routes[route.name];

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: showNavbar
          ? { backgroundColor: THEME.COLORS.BACKGROUND_NAVBAR_HEADER }
          : { display: "none" },
        tabBarActiveTintColor: THEME.COLORS.ACTIVE,
        tabBarInactiveTintColor: THEME.COLORS.DESACTIVE,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Repositórios" component={Home} />
      <Tab.Screen name="Favoritos" component={Favorites} />
    </Tab.Navigator>
  );
}
