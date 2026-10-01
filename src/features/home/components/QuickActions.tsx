import { Bookmark, FilePlus, Library } from "lucide-react-native";
import { Pressable, StyleSheet } from "react-native";

import { ThemedIcon } from "@/components/themed-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Font } from "@/constants/font";
import { useRouter } from "expo-router";

const actions = [
  {
    label: "New Note",
    icon: FilePlus,
  },
  {
    label: "Subjects",
    icon: Library,
  },
  {
    label: "Saved",
    icon: Bookmark,
  },
];

export function QuickActions() {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading}>Quick Actions</ThemedText>

      <ThemedView style={styles.actions}>
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Pressable
              key={action.label}
              style={styles.actionButton}
              onPress={() => {
                router.push("/hello");
              }}
            >
              <ThemedView type="primaryLight" style={styles.iconContainer}>
                <ThemedIcon icon={action.icon} size={20} type="primary" />
              </ThemedView>

              <ThemedText style={styles.actionLabel}>{action.label}</ThemedText>
            </Pressable>
          );
        })}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    backgroundColor: "transparent",
  },

  heading: {
    fontFamily: Font.Bold,
    fontSize: 18,
  },

  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },

  actionButton: {
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  iconContainer: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },

  actionLabel: {
    marginTop: 8,
    fontFamily: Font.Medium,
    fontSize: 12,
  },
});
