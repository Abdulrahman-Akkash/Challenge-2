import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Video } from "expo-av";
import { BG } from "../_ui";

export default function Player() {
  const { title, url } = useLocalSearchParams<{ title: string; url: string }>();

  return (
    <View style={{ flex: 1, backgroundColor: BG, padding: 12, gap: 12 }}>
      <Text style={{ fontWeight: "900", fontSize: 16 }}>{title ?? "Video"}</Text>
      <View style={{ borderRadius: 14, overflow: "hidden", backgroundColor: "#000" }}>
        <Video style={{ width: "100%", height: 220 }} source={{ uri: url }} useNativeControls resizeMode="contain" />
      </View>
      <Text style={{ color: "#666" }}>Video linkini sonra kendi içeriklerinle değiştirebilirsin.</Text>
    </View>
  );
}
