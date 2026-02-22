import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { stories } from "../../data/stories";
import { posts } from "../../data/posts";
import StoryBubble from "../../components/StoryBubble";
import PostCard from "../../components/PostCard";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      {/* top header */}
      <View style={styles.topBar}>
        <Ionicons name="logo-instagram" size={22} color="#111" />
        <Text style={styles.title}>Instagram</Text>
        <View style={styles.topIcons}>
          <Ionicons name="heart-outline" size={22} color="#111" />
          <Ionicons name="chatbubble-outline" size={22} color="#111" />
        </View>
      </View>

      <FlatList
        ListHeaderComponent={
          <View style={styles.storiesBox}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {stories.map((s) => (
                <StoryBubble key={s.id} story={s} />
              ))}
            </ScrollView>
          </View>
        }
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff" },
  topBar: {
    height: 54,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { fontSize: 18, fontWeight: "700", color: "#111" },
  topIcons: { flexDirection: "row", gap: 12 },

  storiesBox: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});