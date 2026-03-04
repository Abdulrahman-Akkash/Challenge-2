import React from "react";
import { View, Text, ScrollView } from "react-native";
import { BG } from "./_ui";

export default function Onam() {
  return (
    <View style={{ flex: 1, backgroundColor: BG }}>
      <ScrollView contentContainerStyle={{ padding: 12, gap: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: "900" }}>Onam</Text>
        <Text style={{ color: "#555", lineHeight: 20 }}>
          Bu uygulama demo amaçlıdır. Girilen veriler sadece cihaz üzerinde tutulur (demo). Kullanıcı, uygulamayı
          kullanarak bu bilgilendirmeyi okuduğunu ve kabul ettiğini beyan eder.
        </Text>
      </ScrollView>
    </View>
  );
}