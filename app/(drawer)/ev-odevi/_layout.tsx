import { Stack } from "expo-router";
import { PURPLE, HeaderPlus } from "../_ui";

export default function EvOdeviLayout() {
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
          title: "Ev Ödevi",
          headerRight: () => <HeaderPlus />,
        }}
      />
      <Stack.Screen name="[id]" options={{ title: "Ev Ödevi" }} />
    </Stack>
  );
}
