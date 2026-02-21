import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type RootStackParamList = {
  Home: undefined;
  ProfileScreen: undefined;
  Settings: undefined;
  Search: undefined;
  AddPost: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function BottomTab() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Octicons name="home" size={24} color="black" />{" "}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Octicons name="search" size={24} color="black" />{" "}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("AddPost")}>
        <Octicons name="plus-circle" size={24} color="black" />{" "}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
        <Octicons name="person" size={24} color="black" />{" "}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Octicons name="gear" size={24} color="black" />{" "}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
