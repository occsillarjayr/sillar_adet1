
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";

import { useRouter } from "expo-router";

export default function Templates() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Templates</Text>
          <Text style={styles.subtitle}>
            Find inspiration for your next design.
          </Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.profileText}>C</Text>
        </View>
      </View>

      {/* Featured Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Start with a Template!
        </Text>

        <Text style={styles.bannerSubtitle}>
          Choose a design and make it your own.
        </Text>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>
        Explore Templates
      </Text>

      <View style={styles.grid}>

        <Pressable
          style={[styles.card, { backgroundColor: "#E9D5FF" }]}
          onPress={() => router.push("/posts/create")}
        >
          <Text style={styles.emoji}>📱</Text>
          <Text style={styles.cardTitle}>Social Media</Text>
          <Text style={styles.cardSubtitle}>Posts and stories</Text>
        </Pressable>

        <Pressable
          style={[styles.card, { backgroundColor: "#CFFAFE" }]}
          onPress={() => router.push("/posts/create")}
        >
          <Text style={styles.emoji}>📊</Text>
          <Text style={styles.cardTitle}>Presentations</Text>
          <Text style={styles.cardSubtitle}>Slides and reports</Text>
        </Pressable>

        <Pressable
          style={[styles.card, { backgroundColor: "#FCE7B2" }]}
          onPress={() => router.push("/posts/create")}
        >
          <Text style={styles.emoji}>🎨</Text>
          <Text style={styles.cardTitle}>Posters</Text>
          <Text style={styles.cardSubtitle}>Creative layouts</Text>
        </Pressable>

        <Pressable
          style={[styles.card, { backgroundColor: "#FBCFE8" }]}
          onPress={() => router.push("/posts/create")}
        >
          <Text style={styles.emoji}>📄</Text>
          <Text style={styles.cardTitle}>Documents</Text>
          <Text style={styles.cardSubtitle}>Simple documents</Text>
        </Pressable>

        <Pressable
          style={[styles.card, { backgroundColor: "#D1FAE5" }]}
          onPress={() => router.push("/posts/create")}
        >
          <Text style={styles.emoji}>💌</Text>
          <Text style={styles.cardTitle}>Invitations</Text>
          <Text style={styles.cardSubtitle}>Special occasions</Text>
        </Pressable>

        <Pressable
          style={[styles.card, { backgroundColor: "#FED7AA" }]}
          onPress={() => router.push("/posts/create")}
        >
          <Text style={styles.emoji}>💼</Text>
          <Text style={styles.cardTitle}>Business</Text>
          <Text style={styles.cardSubtitle}>Business designs</Text>
        </Pressable>

      </View>

      {/* Bottom Button */}
      <Pressable
        style={styles.button}
        onPress={() => router.push("/posts")}
      >
        <Text style={styles.buttonText}>
          View My Designs →
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

  banner: {
    backgroundColor: "#7655D9",
    padding: 22,
    borderRadius: 18,
    marginBottom: 28,
  },

  bannerTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#FFF",
  },

  bannerSubtitle: {
    fontSize: 13,
    color: "#EEE8FF",
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#25213B",
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    height: 145,
    borderRadius: 15,
    padding: 15,
    marginBottom: 14,
    justifyContent: "center",
  },

  emoji: {
    fontSize: 30,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#25213B",
  },

  cardSubtitle: {
    fontSize: 11,
    color: "#666",
    marginTop: 5,
  },

  button: {
    backgroundColor: "#25213B",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 35,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
