import { ScrollView, StyleSheet } from "react-native";
import Header from "../../components/Header";
import PostScreen from "../../components/PostScreen";
import Stats from "../../components/Stats";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Stats />
      <PostScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
