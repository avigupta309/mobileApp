import { ArrowRight } from "lucide-react-native";
import { Pressable, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Font } from "@/constants/font";

export function ContinueLearningCard() {
  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: "#4F46E5",
        },
      ]}
    >
      <ThemedText style={styles.label}>CONTINUE LEARNING</ThemedText>

      <ThemedText style={styles.title}>Database Management</ThemedText>

      <ThemedText style={styles.subtitle}>Chapter 4 · Normalization</ThemedText>

      <ThemedView
        style={[styles.progressSection, { backgroundColor: "transparent" }]}
      >
        <ThemedView style={[styles.progressBackground]}>
          <ThemedView style={styles.progress} />
        </ThemedView>

        <ThemedView style={[styles.footer, { backgroundColor: "transparent" }]}>
          <ThemedText style={styles.progressText}>72% completed</ThemedText>

          <Pressable style={styles.continueButton}>
            <ThemedText style={styles.continueText}>Continue</ThemedText>

            <ArrowRight size={16} color="#FFFFFF" />
          </Pressable>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 20,
    borderRadius: 16,
  },

  label: {
    color: "#E0E7FF",
    fontFamily: Font.Medium,
    fontSize: 14,
  },

  title: {
    marginTop: 8,
    color: "#FFFFFF",
    fontFamily: Font.Bold,
    fontSize: 20,
  },

  subtitle: {
    marginTop: 4,
    color: "#E0E7FF",
    fontFamily: Font.Regular,
    fontSize: 14,
  },

  progressSection: {
    marginTop: 20,
  },

  progressBackground: {
    height: 8,
    overflow: "hidden",
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },

  progress: {
    width: "72%",
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },

  progressText: {
    color: "#E0E7FF",
    fontFamily: Font.Regular,
    fontSize: 12,
  },

  continueButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  continueText: {
    color: "#FFFFFF",
    fontFamily: Font.SemiBold,
    fontSize: 14,
  },
});
