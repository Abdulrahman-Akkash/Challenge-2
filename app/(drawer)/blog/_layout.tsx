import { Stack } from "expo-router";
import { PURPLE } from "../_ui";

export default function BlogLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: PURPLE,
        headerTitleStyle: { fontWeight: "900" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Blog" }} />
      <Stack.Screen name="[id]" options={{ title: "Blog" }} />
    </Stack>
  );
}
