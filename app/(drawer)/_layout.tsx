import "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { PURPLE } from "./_ui";

export default function DrawerLayout() {
  return (
    <Drawer
      initialRouteName="bildirim"
      screenOptions={{
        headerTintColor: PURPLE,
        headerTitleStyle: { fontWeight: "900" },
        drawerActiveTintColor: PURPLE,
      }}
    >
      <Drawer.Screen
        name="bildirim"
        options={{
          title: "Bildirim",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ev-odevi"
        options={{
          title: "Ev Ödevi",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="danismanlik"
        options={{
          title: "Danışmanlık",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="yol-haritasi"
        options={{
          title: "Yol Haritası",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="map-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="kurslar"
        options={{
          title: "Kurslar",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="play-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="blog"
        options={{
          title: "Blog",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="reader-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="anket"
        options={{
          title: "Anket",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="clipboard-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="forum"
        options={{
          title: "Forum",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="iletisim"
        options={{
          title: "İletişim",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hakkimizda"
        options={{
          title: "Hakkımızda",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="onam"
        options={{
          title: "Onam",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="shield-checkmark-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="kisa-bilgiler"
        options={{
          title: "Kısa Bilgiler",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bulb-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
