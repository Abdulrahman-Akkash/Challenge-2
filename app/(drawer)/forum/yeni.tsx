import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, Alert, ScrollView, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { BG, PURPLE } from "../_ui";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function YeniKonu() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("İzin gerekli", "Galeri izni vermen gerekiyor.");
        return;
      }
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });
    if (!result.canceled) setImageUri(result.assets[0].uri);
  };

  const submit = () => {
    if (!title.trim() || !message.trim()) {
      Alert.alert("Eksik", "Başlık ve mesaj zorunlu.");
      return;
    }
    Alert.alert("Gönderildi", "Demo: Backend’e kaydetme burada yapılacak.");
    router.back();
  };

  return (
    <View style={{ flex: 1, backgroundColor: BG }}>
      <ScrollView contentContainerStyle={{ padding: 14, gap: 12 }}>
        <Text style={{ color: "#444" }}>
          Kime: <Text style={{ fontWeight: "900" }}>Forum Yönetimi</Text>
        </Text>

        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Gönderinizin başlığını yazın"
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E6E6E6",
            paddingHorizontal: 12,
            paddingVertical: 12,
          }}
        />
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Mesajınızı buraya yazınız"
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E6E6E6",
            paddingHorizontal: 12,
            paddingVertical: 12,
            height: 140,
            textAlignVertical: "top",
          }}
          multiline
        />

        {imageUri ? <Image source={{ uri: imageUri }} style={{ width: "100%", height: 180, borderRadius: 12 }} /> : null}

        <Pressable onPress={pickImage} style={{ backgroundColor: PURPLE, borderRadius: 12, padding: 12, flexDirection: "row", gap: 8, alignSelf: "flex-start" }}>
          <Ionicons name="add" size={18} color="white" />
          <Text style={{ color: "white", fontWeight: "900" }}>Resim Ekle</Text>
        </Pressable>

        <Pressable onPress={submit} style={{ backgroundColor: "white", borderRadius: 12, padding: 12, flexDirection: "row", gap: 8, alignSelf: "flex-start", borderWidth: 1, borderColor: "#E6E6E6" }}>
          <Ionicons name="send" size={18} color={PURPLE} />
          <Text style={{ color: PURPLE, fontWeight: "900" }}>Gönder</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
