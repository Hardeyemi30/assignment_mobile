import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import type { Story } from "../data/stories";

export default function StoryBubble({ story }: { story: Story }) {
  return (
    <View style={styles.container}>
      <View style={styles.ring}>
        <Image source={{ uri: story.avatar }} style={styles.avatar} />
      </View>
      <Text numberOfLines={1} style={styles.name}>
        {story.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 76, alignItems: "center", marginRight: 10 },
  ring: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: "#ff2d55",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: { width: 54, height: 54, borderRadius: 27 },
  name: { marginTop: 6, fontSize: 12, color: "#111" },
});