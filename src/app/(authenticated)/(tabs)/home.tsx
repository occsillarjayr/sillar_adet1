
import { useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Creator! 👋</Text>
          <Text style={styles.subtitle}>
            What will you design today?
          </Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.profileText}>C</Text>
        </View>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.search}
        placeholder="Search your designs..."
        placeholderTextColor="#888"
      />

      {/* Create Design Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Bring your ideas to life!
        </Text>
        <Text style={styles.bannerSubtitle}>
          Start creating something amazing.
        </Text>

        <Pressable
          style={styles.createButton}
          onPress={() => router.push("/posts/create")}
        >
          <Text style={styles.createButtonText}>
            + Create a Design
          </Text>
        </Pressable>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Explore Categories</Text>

      <View style={styles.categoryContainer}>
        <View style={[styles.categoryCard, { backgroundColor: "#E9D5FF" }]}>
          <Text style={styles.categoryEmoji}>📱</Text>
          <Text style={styles.categoryText}>Social Media</Text>
        </View>

        <View style={[styles.categoryCard, { backgroundColor: "#FCE7B2" }]}>
          <Text style={styles.categoryEmoji}>📄</Text>
          <Text style={styles.categoryText}>Documents</Text>
        </View>

        <View style={[styles.categoryCard, { backgroundColor: "#CFFAFE" }]}>
          <Text style={styles.categoryEmoji}>🎨</Text>
          <Text style={styles.categoryText}>Graphics</Text>
        </View>

        <View style={[styles.categoryCard, { backgroundColor: "#FBCFE8" }]}>
          <Text style={styles.categoryEmoji}>📊</Text>
          <Text style={styles.categoryText}>Presentations</Text>
        </View>
      </View>

      {/* Recent Projects */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Projects</Text>

        <Pressable onPress={() => router.push("/posts")}>
          <Text style={styles.seeAll}>See All</Text>
        </Pressable>
      </View>

      <View style={styles.projectCard}>
        <View style={styles.projectIcon}>
          <Text style={styles.projectEmoji}>🖼️</Text>
        </View>

        <View style={styles.projectInfo}>
          <Text style={styles.projectTitle}>My First Design</Text>
          <Text style={styles.projectDescription}>
            Your creative project
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </View>

      {/* View All Projects Button */}
      <Pressable
        style={styles.viewButton}
        onPress={() => router.push("/posts")}
      >
        <Text style={styles.viewButtonText}>
          View My Projects
        </Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7FC",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
    marginBottom: 25,
  },

  greeting: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#25213B",
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },

  profile: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#7655D9",
    justifyContent: "center",
    alignItems: "center",
  },

  profileText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  search: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    fontSize: 14,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#E9E6F0",
  },

  banner: {
    backgroundColor: "#7655D9",
    padding: 22,
    borderRadius: 18,
    marginBottom: 28,
  },

  bannerTitle: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },

  bannerSubtitle: {
    color: "#EEE8FF",
    fontSize: 14,
    marginTop: 8,
  },

  createButton: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 18,
  },

  createButtonText: {
    color: "#7655D9",
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#25213B",
    marginBottom: 15,
  },

  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  categoryCard: {
    width: "48%",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
  },

  categoryEmoji: {
    fontSize: 28,
    marginBottom: 12,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  seeAll: {
    color: "#7655D9",
    fontWeight: "bold",
    marginBottom: 15,
  },

  projectCard: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 14,
    marginBottom: 15,
  },

  projectIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#EEE8FF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  projectEmoji: {
    fontSize: 25,
  },

  projectInfo: {
    flex: 1,
    marginLeft: 12,
  },

  projectTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#25213B",
  },

  projectDescription: {
    color: "#888",
    fontSize: 12,
    marginTop: 4,
  },

  arrow: {
    fontSize: 28,
    color: "#888",
  },

  viewButton: {
    backgroundColor: "#25213B",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
  },

  viewButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
