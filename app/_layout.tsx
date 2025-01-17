import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <GestureHandlerRootView>
    <ThemeProvider value={colorScheme === 'dark'? DarkTheme:DefaultTheme}>
      <Stack >
       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>;
    </ThemeProvider>
    </GestureHandlerRootView>
  )
}
