import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

import { THEME, THEME_DARK } from "../../theme";

import { Favorites } from "../../screens/Favorites";
import { Home } from "../../screens/Home";

const Tab = createBottomTabNavigator();

export function Tabs() {
  const { showNavbar } = useSelector((state: any) => state.showNavbar);
  const { darkMode } = useSelector((state: any) => state.darkMode);

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
          ? {
              backgroundColor: darkMode
                ? THEME_DARK.COLORS.BACKGROUND_NAVBAR_HEADER
                : THEME.COLORS.BACKGROUND_NAVBAR_HEADER,
            }
          : { display: "none" },
        tabBarActiveTintColor: darkMode
          ? THEME_DARK.COLORS.ACTIVE
          : THEME.COLORS.ACTIVE,
        tabBarInactiveTintColor: darkMode
          ? THEME_DARK.COLORS.DESACTIVE
          : THEME.COLORS.DESACTIVE,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Repositórios" component={Home} />
      <Tab.Screen name="Favoritos" component={Favorites} />
    </Tab.Navigator>
  );
}
