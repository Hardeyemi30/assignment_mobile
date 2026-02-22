import React from "react";
import { FlatList, Image, StyleSheet, Pressable, Dimensions } from "react-native";

const GAP = 2;
const width = Dimensions.get("window").width;
const tile = (width - GAP * 4) / 3;

export default function ExploreGrid({
  images,
  onPressItem,
}: {
  images: string[];
  onPressItem?: (index: number) => void;
}) {
  return (
    <FlatList
      data={images}
      keyExtractor={(_, i) => String(i)}
      numColumns={3}
      contentContainerStyle={styles.list}
      columnWrapperStyle={styles.row}
      renderItem={({ item, index }) => (
        <Pressable onPress={() => onPressItem?.(index)}>
          <Image source={{ uri: item }} style={styles.tile} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: GAP },
  row: { gap: GAP, marginBottom: GAP },
  tile: { width: tile, height: tile, backgroundColor: "#eee" },
});