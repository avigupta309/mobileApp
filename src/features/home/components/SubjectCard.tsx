import { StyleSheet } from "react-native";

import { Font } from "@/constants/font";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

type SubjectCardProps = {
  name: string;
  notes: number;
};

export function SubjectCard({ name, notes }: SubjectCardProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedView type="primaryLight" style={styles.iconContainer}>
        <ThemedText themeColor="primary" style={styles.initial}>
          {name.charAt(0)}
        </ThemedText>
      </ThemedView>

      <ThemedText themeColor="text" numberOfLines={1} style={styles.name}>
        {name}
      </ThemedText>

      <ThemedText themeColor="textSecondary" style={styles.notes}>
        {notes} notes
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 12,
    borderRadius: 16,
    padding: 16,
  },

  iconContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },

  initial: {
    fontSize: 16,
    fontFamily: Font.Bold,
  },

  name: {
    marginTop: 16,
    fontSize: 14,
    fontFamily: Font.SemiBold,
  },

  notes: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: Font.Regular,
  },
});
