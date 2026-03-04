import React from "react";
import { View, Text, ScrollView } from "react-native";
import { BG, PURPLE } from "./_ui";

const steps = [
  { title: "1) Uyku düzeni", desc: "Her gün aynı saatte yat / kalk. 7-9 saat hedefle." },
  { title: "2) Beslenme", desc: "Sebze, protein, sağlıklı yağlar. Şeker/fast-food azalt." },
  { title: "3) Aktivite", desc: "Haftada 3 gün 30 dk yürüyüş." },
  { title: "4) Stres yönetimi", desc: "Nefes egzersizi, kısa meditasyon, günlük tutma." },
];

export default function YolHaritasi() {
  return (
    <View style={{ flex: 1, backgroundColor: BG }}>
      <ScrollView contentContainerStyle={{ padding: 12, gap: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "900" }}>Yol Haritası</Text>

        {steps.map((s, i) => (
          <View key={i} style={{ backgroundColor: "white", borderRadius: 12, padding: 12, gap: 6 }}>
            <Text style={{ fontWeight: "900", color: PURPLE }}>{s.title}</Text>
            <Text style={{ color: "#555", lineHeight: 20 }}>{s.desc}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}