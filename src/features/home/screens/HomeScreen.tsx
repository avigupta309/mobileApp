import { ScrollView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Font } from "@/constants/font";

import { ContinueLearningCard } from "../components/ContinueLearningCard";
import { HomeHeader } from "../components/HomeHeader";
import { QuickActions } from "../components/QuickActions";
import { RecentNotes } from "../components/RecentNotes";
import { SearchBar } from "../components/SearchBar";
import { SubjectCard } from "../components/SubjectCard";

const subjects = [
  {
    name: "Database",
    notes: 12,
  },
  {
    name: "Networking",
    notes: 8,
  },
  {
    name: "Research",
    notes: 15,
  },
  {
    name: "Programming",
    notes: 21,
  },
];

export function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <HomeHeader />

        <SearchBar />

        <ContinueLearningCard />

        <QuickActions />

        <ThemedView style={styles.subjectSection}>
          <ThemedText themeColor="text" style={styles.subjectTitle}>
            Your Subjects
          </ThemedText>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.subjectList}
          >
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.name}
                name={subject.name}
                notes={subject.notes}
              />
            ))}
          </ScrollView>
        </ThemedView>

        <RecentNotes />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },

  subjectSection: {
    marginTop: 28,
    backgroundColor: "transparent",
  },

  subjectTitle: {
    fontFamily: Font.Bold,
    fontSize: 18,
  },

  subjectList: {
    marginTop: 16,
  },
});
