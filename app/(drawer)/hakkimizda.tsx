import React from "react";
import { View, Text, ScrollView } from "react-native";
import { BG } from "./_ui";

export default function Hakkimizda() {
  return (
    <View style={{ flex: 1, backgroundColor: BG }}>
      <ScrollView contentContainerStyle={{ padding: 12, gap: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "900" }}>Hakkımızda</Text>
        <Text style={{ color: "#555", lineHeight: 20 }}>
          Hifertility Clone, yaşam tarzı (uyku-beslenme-aktivite-stres) alışkanlıklarını takip etmeye yardımcı olan
          bir demo mobil uygulamadır. Bu uygulama eğitim/ödev amaçlı hazırlanmıştır.
        </Text>
      </ScrollView>
    </View>
  );
}