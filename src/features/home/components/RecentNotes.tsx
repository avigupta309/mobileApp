import { Pressable, StyleSheet } from "react-native";
import { ChevronRight, FileText } from "lucide-react-native";

import { Font } from "@/constants/font";
import { ThemedIcon } from "@/components/themed-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

const notes = [
  {
    title: "Database Normalization",
    subject: "Database Management",
    time: "2 hours ago",
  },
  {
    title: "OSI Model",
    subject: "Computer Networks",
    time: "Yesterday",
  },
  {
    title: "Research Design",
    subject: "Research Methodology",
    time: "2 days ago",
  },
];

export function RecentNotes() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.heading}>Recent Notes</ThemedText>

        <Pressable>
          <ThemedText themeColor="primary" style={styles.seeAll}>
            See all
          </ThemedText>
        </Pressable>
      </ThemedView>

      <ThemedView style={styles.notesContainer}>
        {notes.map((note) => (
          <Pressable key={note.title}>
            <ThemedView type="backgroundElement" style={styles.noteCard}>
              <ThemedView type="primaryLight" style={styles.iconContainer}>
                <ThemedIcon icon={FileText} size={20} type="primary" />
              </ThemedView>

              <ThemedView style={styles.noteContent}>
                <ThemedText numberOfLines={1} style={styles.noteTitle}>
                  {note.title}
                </ThemedText>

                <ThemedText
                  themeColor="textSecondary"
                  style={styles.noteDetails}
                >
                  {note.subject} · {note.time}
                </ThemedText>
              </ThemedView>

              <ThemedIcon icon={ChevronRight} size={18} type="textSecondary" />
            </ThemedView>
          </Pressable>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    backgroundColor: "transparent",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },

  heading: {
    fontFamily: Font.Bold,
    fontSize: 18,
  },

  seeAll: {
    fontFamily: Font.SemiBold,
    fontSize: 14,
  },

  notesContainer: {
    marginTop: 12,
    backgroundColor: "transparent",
  },

  noteCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    padding: 16,
    borderRadius: 16,
  },

  iconContainer: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },

  noteContent: {
    flex: 1,
    marginLeft: 12,
    backgroundColor: "transparent",
  },

  noteTitle: {
    fontFamily: Font.SemiBold,
    fontSize: 14,
  },

  noteDetails: {
    marginTop: 4,
    fontFamily: Font.Regular,
    fontSize: 12,
  },
});
