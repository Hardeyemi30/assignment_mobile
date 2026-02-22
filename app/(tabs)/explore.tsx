import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ExploreGrid from "../../components/ExploreGrid";
import { Link } from "expo-router";

<Link href="/(tabs)/home">Go to Home</Link>

const exploreImages = Array.from({ length: 30 }).map(
  (_, i) => `https://picsum.photos/600/600?random=${200 + i}`
);

export default function ExploreScreen() {
  return (
    <View style={styles.screen}>
      {/* search bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#777" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#777"
          style={styles.input}
        />
      </View>

      {/* grid */}
      <ExploreGrid images={exploreImages} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff" },
  searchBar: {
    marginTop: 10,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  input: { flex: 1, color: "#111" },
});