import React from "react";
import { Stack, useRouter } from "expo-router";
import { PURPLE } from "../_ui";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ForumLayout() {
  const router = useRouter();
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
          title: "Forum",
          headerRight: () => (
            <Pressable onPress={() => router.push("/(drawer)/forum/yeni")} style={{ paddingHorizontal: 12, paddingVertical: 6 }}>
              <Ionicons name="add-circle-outline" size={24} color={PURPLE} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="yeni" options={{ title: "Yeni Konu" }} />
    </Stack>
  );
}
