import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageGrid from "./ImageGrid";

const images = [
  "https://images.unsplash.com/photo-1771600093904-3039b50203d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063",
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
  "https://images.unsplash.com/photo-1487180144351-b8472da7d491",
  "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "https://images.unsplash.com/photo-1771140769180-9982d19dc0c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
];

export default function PostScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
      <ImageGrid images={images} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  editButton: {
    margin: 16,
    padding: 8,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: "center",
    width: 400,
  },

  editText: {
    fontWeight: "600",
  },
});
