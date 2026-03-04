import React from "react";
import { View, Text, Image, Pressable, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const PURPLE = "#6A1B9A";
export const BG = "#F6F7FB";

export function Screen({ children }: { children: React.ReactNode }) {
  return <View style={{ flex: 1, backgroundColor: BG }}>{children}</View>;
}

export function HeaderPlus({ onPress }: { onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress ?? (() => Alert.alert("Bilgi", "Yeni içerik ekleme burada bağlanır."))}
      style={{ paddingHorizontal: 12, paddingVertical: 6 }}
    >
      <Ionicons name="add-circle-outline" size={24} color={PURPLE} />
    </Pressable>
  );
}

export function PostCard({
  title,
  excerpt,
  image,
  author,
  date,
  onPress,
}: {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={s.card}>
      <Text style={s.cardTitle}>{title}</Text>
      <Text style={s.cardExcerpt}>{excerpt}</Text>
      <Image source={{ uri: image }} style={s.cardImage} />
      <Text style={s.meta}>
        {author} • {date}
      </Text>

      <View style={s.actions}>
        <Pressable style={s.actionBtn}>
          <Ionicons name="heart-outline" size={18} color={PURPLE} />
          <Text style={s.actionText}>Beğen</Text>
        </Pressable>
        <Pressable style={s.actionBtn}>
          <Ionicons name="chatbubble-outline" size={18} color={PURPLE} />
          <Text style={s.actionText}>Yorum Ekle</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

// Router uyarısı kesilsin diye:
export default function _UiRoute() {
  return null;
}

const s = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 14,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: { fontSize: 16, fontWeight: "900" },
  cardExcerpt: { color: "#666", marginTop: 6 },
  cardImage: { width: "100%", height: 170, borderRadius: 12, marginTop: 10 },
  meta: { color: "#999", marginTop: 8 },
  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    paddingTop: 10,
  },
  actionBtn: { flexDirection: "row", alignItems: "center", gap: 8 },
  actionText: { color: PURPLE, fontWeight: "800" },
});