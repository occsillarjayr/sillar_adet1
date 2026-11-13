
import { Stack } from "expo-router";
import { AppProvider } from "../services/AppContext";

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(authenticated)" />
        <Stack.Screen name="(unauthenticated)" />
      </Stack>
    </AppProvider>
  );
}
