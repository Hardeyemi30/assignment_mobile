import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Post } from "../data/posts";

export default function PostCard({
  post,
  onPress,
}: {
  post: Post;
  onPress?: () => void;
}) {
  return (
    <View style={styles.card}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.userRow}>
          <Image source={{ uri: post.avatar }} style={styles.avatar} />
          <Text style={styles.username}>{post.user}</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={18} color="#111" />
      </View>

      {/* image */}
      <Pressable onPress={onPress}>
        <Image source={{ uri: post.image }} style={styles.image} />
      </Pressable>

      {/* actions */}
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Ionicons name="heart-outline" size={24} color="#111" />
          <Ionicons name="chatbubble-outline" size={22} color="#111" />
          <Ionicons name="paper-plane-outline" size={22} color="#111" />
        </View>
        <Ionicons name="bookmark-outline" size={22} color="#111" />
      </View>

      {/* text */}
      <Text style={styles.likes}>{post.likesText}</Text>
      <Text style={styles.caption}>
        <Text style={styles.bold}>{post.user} </Text>
        {post.caption}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", marginBottom: 14 },
  header: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  avatar: { width: 30, height: 30, borderRadius: 15 },
  username: { fontWeight: "700", color: "#111" },

  image: { width: "100%", aspectRatio: 1, backgroundColor: "#eee" },

  actions: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftActions: { flexDirection: "row", gap: 14, alignItems: "center" },

  likes: { paddingHorizontal: 12, fontWeight: "600", color: "#111" },
  caption: { paddingHorizontal: 12, paddingTop: 6, paddingBottom: 10, color: "#111" },
  bold: { fontWeight: "700" },
});