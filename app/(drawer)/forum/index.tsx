import React from "react";
import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { forumTopics } from "../_data";
import { Screen, PURPLE } from "../_ui";

export default function ForumList() {
  const router = useRouter();

  return (
    <Screen>
      <FlatList
        contentContainerStyle={{ padding: 12, gap: 12 }}
        data={forumTopics}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={s.card}>
            <Text style={{ fontWeight: "900", fontSize: 16 }}>{item.title}</Text>
            <Text style={{ color: "#666", marginTop: 6 }}>{item.body}</Text>
            <Text style={{ color: "#999", marginTop: 10 }}>{item.date}</Text>
            <Pressable onPress={() => router.push("/(drawer)/forum/yeni")} style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "900", color: PURPLE }}>Yeni Konu Aç →</Text>
            </Pressable>
          </View>
        )}
      />
    </Screen>
  );
}

const s = StyleSheet.create({
  card: { backgroundColor: "white", borderRadius: 14, padding: 12, elevation: 2 },
});
