import { Dimensions, FlatList, Image, StyleSheet } from "react-native";

const size = Dimensions.get("window").width / 3;

export default function ImageGrid({ images }: { images: string[] }) {
  return (
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={styles.image} />
      )}
      numColumns={3}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: size,
    height: size,
  },
});
