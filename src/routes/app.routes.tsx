import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Details } from "../screens/Details";
import { THEME } from "../theme";
import { Tabs } from "./tabs";

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
          headerTintColor: THEME.COLORS.WHITE,
          headerStyle: {
            backgroundColor: "black",
          },
        }}
      />
    </Stack.Navigator>
  );
}
