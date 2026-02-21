import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="chevron-left" size={30} color="black" />
      <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 16 }}>
        Sarah_W
      </Text>
      <Feather name="more-horizontal" size={30} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
});
