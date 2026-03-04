import { Stack } from "expo-router";
import { PURPLE, HeaderPlus } from "../_ui";

export default function KisaBilgilerLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: PURPLE,
        headerTitleStyle: { fontWeight: "900" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Kısa Bilgiler",
          headerRight: () => <HeaderPlus />,
        }}
      />
      <Stack.Screen name="[id]" options={{ title: "Kısa Bilgiler" }} />
    </Stack>
  );
}
