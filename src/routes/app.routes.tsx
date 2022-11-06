import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { THEME } from "../theme";

import { Details } from "../screens/Details";
import { Tabs } from "./Tabs";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Respositórios" component={Tabs} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitle: "Detalhes",
          headerTintColor: THEME.COLORS.DETAILS_TEXT,
          headerStyle: {
            backgroundColor: THEME.COLORS.BACKGROUND_DETAILS_TAB,
          },
        }}
      />
    </Stack.Navigator>
  );
}
