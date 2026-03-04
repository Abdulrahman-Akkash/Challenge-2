import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { notifications } from "./_data";
import { PURPLE, BG } from "./_ui";

export default function Bildirim() {
  return (
    <View style={{ flex: 1, backgroundColor: BG }}>
      <FlatList
        data={notifications}
        keyExtractor={(i) => i.id}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: "#EEE" }} />}
        renderItem={({ item }) => (
          <View style={s.row}>
            <Ionicons name={item.icon} size={22} color={PURPLE} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14 }}>{item.text}</Text>
            </View>
            <Text style={{ color: "#777", fontSize: 12 }}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
    alignItems: "center",
    backgroundColor: "white",
  },
});
