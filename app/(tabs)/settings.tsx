import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const settingsOptions = [
  { id: "1", title: "Account", icon: "person-outline" },
  { id: "2", title: "Privacy", icon: "lock-closed-outline" },
  { id: "3", title: "Notifications", icon: "notifications-outline" },
  { id: "4", title: "Help", icon: "help-circle-outline" },
  { id: "5", title: "Log Out", icon: "log-out-outline" },
];

export default function Settings() {
  return (
    <View style={styles.container}>
      <FlatList
        data={settingsOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionLeft}>
              <Ionicons name={item.icon as any} size={22} />
              <Text style={styles.optionText}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },

  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },

  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  optionText: {
    marginLeft: 12,
    fontSize: 16,
  },
});
