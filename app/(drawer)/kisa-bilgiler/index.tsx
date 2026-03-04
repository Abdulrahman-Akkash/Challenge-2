import React from "react";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import { posts } from "../_data";
import { PostCard, Screen } from "../_ui";

export default function KisaBilgiList() {
  const router = useRouter();
  const data = posts.filter((p) => p.type === "kisa");

  return (
    <Screen>
      <FlatList
        contentContainerStyle={{ padding: 12, gap: 12 }}
        data={data}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <PostCard
            title={item.title}
            excerpt={item.excerpt}
            image={item.image}
            author={item.author}
            date={item.date}
            onPress={() => router.push(`/(drawer)/kisa-bilgiler/${item.id}`)}
          />
        )}
      />
    </Screen>
  );
}
