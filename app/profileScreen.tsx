import { ScrollView, StyleSheet } from "react-native";
import BottomTab from "./components/bottomTab";
import Header from "./components/header";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <BottomTab />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
