import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";

import { useRouter } from "expo-router";

export default function Projects() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Projects</Text>
          <Text style={styles.subtitle}>
            All your creative works in one place.
          </Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.profileText}>C</Text>
        </View>
      </View>

      {/* Search */}
      <TextInput
        style={styles.search}
        placeholder="Search your projects..."
        placeholderTextColor="#999"
      />

      {/* Create Project Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Ready to create something?
        </Text>

        <Text style={styles.bannerSubtitle}>
          Turn your ideas into beautiful designs.
        </Text>

        <Pressable
          style={styles.createButton}
          onPress={() => router.push("/posts/create")}
        >
          <Text style={styles.createButtonText}>
            + Create Project
          </Text>
        </Pressable>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>
        Project Categories
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        <View style={styles.category}>
          <Text style={styles.categoryEmoji}>📱</Text>
          <Text style={styles.categoryText}>Social Media</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryEmoji}>📊</Text>
          <Text style={styles.categoryText}>Presentation</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryEmoji}>📄</Text>
          <Text style={styles.categoryText}>Documents</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryEmoji}>🎨</Text>
          <Text style={styles.categoryText}>Graphics</Text>
        </View>
      </ScrollView>

      {/* Recent Projects */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Your Designs
        </Text>

        <Pressable onPress={() => router.push("/posts")}>
          <Text style={styles.seeAll}>See All →</Text>
        </Pressable>
      </View>

      {/* Project Cards */}
      <View style={styles.projectGrid}>

        <Pressable
          style={[styles.projectCard, { backgroundColor: "#E9D5FF" }]}
          onPress={() => router.push("/posts")}
        >
          <Text style={styles.projectEmoji}>🖼️</Text>
          <Text style={styles.projectName}>My Designs</Text>
          <Text style={styles.projectDescription}>
            Manage your creations
          </Text>
        </Pressable>

        <Pressable
          style={[styles.projectCard, { backgroundColor: "#CFFAFE" }]}
          onPress={() => router.push("/posts")}
        >
          <Text style={styles.projectEmoji}>📁</Text>
          <Text style={styles.projectName}>Saved Projects</Text>
          <Text style={styles.projectDescription}>
            View your saved work
          </Text>
        </Pressable>

        <Pressable
          style={[styles.projectCard, { backgroundColor: "#FCE7B2" }]}
          onPress={() => router.push("/posts")}
        >
          <Text style={styles.projectEmoji}>✨</Text>
          <Text style={styles.projectName}>My Creations</Text>
          <Text style={styles.projectDescription}>
            Explore your ideas
          </Text>
        </Pressable>

        <Pressable
          style={[styles.projectCard, { backgroundColor: "#FBCFE8" }]}
          onPress={() => router.push("/posts")}
        >
          <Text style={styles.projectEmoji}>🎯</Text>
          <Text style={styles.projectName}>All Projects</Text>
          <Text style={styles.projectDescription}>
            See all your projects
          </Text>
        </Pressable>

      </View>

      {/* View Posts */}
      <Pressable
        style={styles.viewButton}
        onPress={() => router.push("/posts")}
      >
        <Text style={styles.viewButtonText}>
          View All My Posts →
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

  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#25213B",
  },

  subtitle: {
    fontSize: 13,
    color: "#888",
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
    fontSize: 20,
    fontWeight: "bold",
  },

  bannerSubtitle: {
    color: "#EEE8FF",
    fontSize: 13,
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

  categoryScroll: {
    marginBottom: 25,
  },

  category: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 13,
    marginRight: 10,
    alignItems: "center",
    minWidth: 105,
  },

  categoryEmoji: {
    fontSize: 25,
    marginBottom: 8,
  },

  categoryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#444",
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

  projectGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  projectCard: {
    width: "48%",
    height: 155,
    padding: 15,
    borderRadius: 15,
    marginBottom: 14,
    justifyContent: "center",
  },

  projectEmoji: {
    fontSize: 30,
    marginBottom: 12,
  },

  projectName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#25213B",
  },

  projectDescription: {
    fontSize: 11,
    color: "#666",
    marginTop: 5,
  },

  viewButton: {
    backgroundColor: "#25213B",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 35,
  },

  viewButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
