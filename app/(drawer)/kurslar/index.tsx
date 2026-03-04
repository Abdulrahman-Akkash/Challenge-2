import React from "react";
import { FlatList, Pressable, Image, Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { courses } from "../_data";
import { Screen } from "../_ui";

export default function KurslarList() {
  const router = useRouter();

  return (
    <Screen>
      <FlatList
        contentContainerStyle={{ padding: 12, gap: 12 }}
        data={courses}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <Pressable style={s.card} onPress={() => router.push(`/(drawer)/kurslar/${item.id}`)}>
            <Image source={{ uri: item.banner }} style={s.banner} />
            <View style={{ padding: 12 }}>
              <Text style={{ fontSize: 18, fontWeight: "900" }}>{item.title}</Text>
              <Text style={{ color: "#666" }}>{item.sectionTitle}</Text>
            </View>
          </Pressable>
        )}
      />
    </Screen>
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  },
  banner: { width: "100%", height: 150 },
});
