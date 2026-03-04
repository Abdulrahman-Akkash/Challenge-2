import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { BG, PURPLE } from "./_ui";

export default function Anket() {
  const [answers, setAnswers] = useState({ uyku: 3, stres: 3, su: 3, spor: 3 });

  const set = (k: keyof typeof answers, v: number) => setAnswers((p) => ({ ...p, [k]: v }));

  const Row = ({ label, k }: { label: string; k: keyof typeof answers }) => (
    <View style={{ backgroundColor: "white", borderRadius: 12, padding: 12, gap: 10 }}>
      <Text style={{ fontWeight: "900" }}>{label}</Text>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <Pressable
            key={n}
            onPress={() => set(k, n)}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 12,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: answers[k] === n ? PURPLE : "#E6E6E6",
              backgroundColor: answers[k] === n ? "#F3E5F5" : "white",
            }}
          >
            <Text style={{ fontWeight: "900", color: answers[k] === n ? PURPLE : "#555" }}>{n}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={{ color: "#666" }}>1: düşük, 5: yüksek</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: BG }}>
      <ScrollView contentContainerStyle={{ padding: 12, gap: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "900" }}>Anket</Text>

        <Row label="Uyku düzenim iyi" k="uyku" />
        <Row label="Stres seviyem düşük" k="stres" />
        <Row label="Günlük su tüketimim yeterli" k="su" />
        <Row label="Haftalık spor yapıyorum" k="spor" />

        <Pressable
          onPress={() => alert("Anket gönderildi (demo).")}
          style={{ backgroundColor: PURPLE, padding: 14, borderRadius: 12, alignItems: "center" }}
        >
          <Text style={{ color: "white", fontWeight: "900" }}>Gönder</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}