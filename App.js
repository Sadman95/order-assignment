import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Text from "./src/components/text/text";
import Item from "./src/screens/item";
import Splash from "./src/screens/splash";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "SF-display-bold": require("./assets/fonts/sf-pro-display-bold.ttf"),
    "SF-text-bold": require("./assets/fonts/sf-pro-text-bold.ttf"),
    "SF-text-semibold": require("./assets/fonts/sf-pro-text-semibold.ttf"),
    "SF-text-medium": require("./assets/fonts/sf-pro-text-medium.ttf"),
    "SF-text-regular": require("./assets/fonts/sf-pro-text-regular.ttf"),
  });
  if (!fontsLoaded) return <Text>Font is loading...</Text>;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
