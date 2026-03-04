import { Stack } from "expo-router";
import { PURPLE } from "../_ui";

export default function KurslarLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: PURPLE,
        headerTitleStyle: { fontWeight: "900" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Kurslar" }} />
      <Stack.Screen name="[id]" options={{ title: "Kurs" }} />
      <Stack.Screen name="player" options={{ title: "Video" }} />
    </Stack>
  );
}
