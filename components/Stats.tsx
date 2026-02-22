import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Stats() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          }}
          style={styles.avatar}
        />
        <Text style={styles.proText}>Sarah_W</Text>
        <Text style={styles.profileText}>Travel lover | Photographer</Text>
      </View>

      <View style={styles.stats}>
        <StatItem label="Posts" value="120" />
        <StatItem label="Followers" value="5,200" />
        <StatItem label="Following" value="680" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Follow" onPress={() => {}} />
      </View>
    </View>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    flex: 1,
    justifyContent: "space-around",
  },
  avatar: {
    marginBottom: 24,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 12,
    color: "#666",
    position: "absolute",
    bottom: -50,
    textAlign: "center",
  },
  proText: {
    position: "absolute",
    bottom: -20,
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    position: "absolute",
    marginTop: 120,
    right: 160,
    textAlign: "center",
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 24,
  },
  statItem: {
    alignItems: "center",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
  text: {
    wordWrap: "nowrap",
    color: "#666",
  },
});
