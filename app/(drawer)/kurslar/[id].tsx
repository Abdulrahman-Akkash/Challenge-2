import React from "react";
import { View, Text, Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { courses } from "../_data";
import { BG, PURPLE } from "../_ui";

export default function KursDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <View style={{ flex: 1, padding: 16, backgroundColor: BG }}>
        <Text>Kurs bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: BG }}>
      <ScrollView>
        <Image source={{ uri: course.banner }} style={{ width: "100%", height: 220 }} />
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 22, fontWeight: "900" }}>{course.title}</Text>
          <Text style={{ color: "#777", marginTop: 4 }}>{course.sectionTitle}</Text>
        </View>

        {course.lessons.map((l, idx) => (
          <Pressable
            key={l.id}
            style={s.lesson}
            onPress={() =>
              router.push({
                pathname: "/(drawer)/kurslar/player",
                params: { title: l.title, url: l.videoUrl },
              })
            }
          >
            <Text style={s.idx}>{idx + 1}</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "800" }}>{l.title}</Text>
              <Text style={{ color: "#777" }}>Video • {l.duration}</Text>
            </View>
            <Ionicons name="play-circle-outline" size={26} color={PURPLE} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  lesson: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  idx: { width: 22, textAlign: "center", fontWeight: "900", color: "#777" },
});
