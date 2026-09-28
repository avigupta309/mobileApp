import { StyleSheet, TextInput } from "react-native";

import { Font } from "@/constants/font";
import { ThemedIcon } from "@/components/themed-icon";
import { ThemedView } from "@/components/themed-view";
import { Search } from "lucide-react-native";

export function SearchBar() {
  return (
    <ThemedView type="backgroundElement" style={styles.container}>
      <ThemedIcon icon={Search} size={20} type="textSecondary" />

      <TextInput
        placeholder="Search notes, subjects..."
        placeholderTextColor="#94A3B8"
        style={styles.input}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 16,
  },

  input: {
    marginLeft: 12,
    flex: 1,
    fontFamily: Font.Regular,
    fontSize: 14,
    color: "#1E293B",
  },
});
