import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { posts } from "../_data";
import { BG } from "../_ui";

export default function EvOdeviDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const post = posts.find((p) => p.id === id && p.type === "ev");

  if (!post) {
    return (
      <View style={{ flex: 1, padding: 16, backgroundColor: BG }}>
        <Text>Ödev bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: BG }}>
      <ScrollView>
        <Image source={{ uri: post.image }} style={{ width: "100%", height: 240 }} />
        <View style={{ padding: 16, gap: 10 }}>
          <Text style={{ fontSize: 22, fontWeight: "900" }}>{post.title}</Text>
          <Text style={{ color: "#666" }}>
            {post.author} • {post.date}
          </Text>
          <Text style={{ lineHeight: 20, fontSize: 15, color: "#444" }}>{post.body}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
