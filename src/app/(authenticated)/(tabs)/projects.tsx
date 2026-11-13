
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import { useApp } from "../../../services/AppContext";

export default function Projects() {
  const router = useRouter();
  const { posts, deletePost } = useApp();

  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

 const handleDelete = (id: string) => {
  const selectedPost = posts.find((post) => post.id === id);

  if (!selectedPost) return;

  const confirmed = window.confirm(
    `Are you sure you want to delete "${selectedPost.title}"?`
  );

  if (confirmed) {
    deletePost(id);
  }
};

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
        value={search}
        onChangeText={setSearch}
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

      {/* Your Projects */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Your Designs</Text>
        <Text style={styles.count}>{posts.length} Projects</Text>
      </View>

      {filteredPosts.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyEmoji}>📂</Text>
          <Text style={styles.emptyTitle}>No projects found</Text>
          <Text style={styles.emptySubtitle}>
            Create a new project or try another search.
          </Text>
        </View>
      ) : (
        filteredPosts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.postInfo}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text style={styles.postContent}>
                {post.content}
              </Text>
            </View>

            <View style={styles.actions}>
              <Pressable
                style={styles.editButton}
                onPress={() =>
                  router.push({
                    pathname: "/posts/[id]",
                    params: { id: post.id },
                  })
                }
              >
                <Text style={styles.editText}>Edit</Text>
              </Pressable>

              <Pressable
  style={styles.deleteButton}
  onPress={() => {
    console.log("Deleting post:", post.id);
    deletePost(post.id);
  }}
>
  <Text style={styles.deleteText}>Delete</Text>
</Pressable>
            </View>
          </View>
        ))
      )}

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
    color: "#25213B",
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
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#25213B",
  },
  count: {
    color: "#888",
    fontSize: 12,
  },
  postCard: {
    backgroundColor: "#FFF",
    padding: 17,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#EEEAF5",
  },
  postInfo: {
    marginBottom: 15,
  },
  postTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#25213B",
  },
  postContent: {
    color: "#777",
    fontSize: 13,
    marginTop: 7,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  editButton: {
    backgroundColor: "#EEE9FF",
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 9,
  },
  editText: {
    color: "#7655D9",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#FEE2E2",
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 9,
  },
  deleteText: {
    color: "#DC2626",
    fontWeight: "bold",
  },
  emptyBox: {
    backgroundColor: "#FFF",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
  },
  emptyEmoji: {
    fontSize: 35,
    marginBottom: 10,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#25213B",
  },
  emptySubtitle: {
    color: "#888",
    fontSize: 12,
    textAlign: "center",
    marginTop: 7,
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
