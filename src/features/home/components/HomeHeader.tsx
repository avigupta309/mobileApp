import { Bell, User } from "lucide-react-native";
import { Pressable, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Font } from "@/constants/font";

export function HomeHeader() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.userInfo}>
        <ThemedText type="small" style={styles.greeting}>
          Good morning 👋
        </ThemedText>

        <ThemedText style={styles.name}>Avinash</ThemedText>
      </ThemedView>

      <ThemedView style={styles.actions}>
        <Pressable style={styles.button}>
          <Bell size={21} />
        </Pressable>

        <Pressable style={styles.button}>
          <User size={21} />
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },

  userInfo: {
    backgroundColor: "transparent",
  },

  greeting: {
    fontFamily: Font.Regular,
    fontSize: 14,
  },

  name: {
    marginTop: 4,
    fontFamily: Font.Bold,
    fontSize: 24,
  },

  actions: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: "transparent",
  },

  button: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "transparent",
  },
});
