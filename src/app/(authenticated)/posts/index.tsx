
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import { useApp } from "../../../services/AppContext";

export default function Posts() {
  const router = useRouter();
  const { posts, deletePost } = useApp();

  const handleDelete = (id: string) => {
    if (typeof window !== "undefined" && typeof window.confirm === "function") {
      const confirmed = window.confirm(
        "Are you sure you want to delete this post?"
      );

      if (confirmed) {
        deletePost(id);
      }

      return;
    }

    Alert.alert(
      "Delete Post",
      "Are you sure you want to delete this post?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deletePost(id),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Posts</Text>

      <Pressable
        style={styles.addButton}
        onPress={() => router.push("/posts/create")}
      >
        <Text style={styles.addButtonText}>+ Add New Post</Text>
      </Pressable>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        extraData={posts}
        ListEmptyComponent={
          <Text style={styles.empty}>No posts available.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.postTitle}>{item.title}</Text>

            <Text style={styles.content}>{item.content}</Text>

            <View style={styles.actions}>
              <Pressable
                style={styles.editButton}
                onPress={() =>
                  router.push(`/posts/${item.id}`)
                }
              >
                <Text style={styles.editText}>View / Edit</Text>
              </Pressable>

              <Pressable
                style={styles.deleteButton}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
      />

      <Pressable
        style={styles.backButton}
        onPress={() =>
          router.replace("/(authenticated)/(tabs)/home")
        }
      >
        <Text style={styles.backText}>← Back to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F7FC",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#25213B",
  },
  addButton: {
    backgroundColor: "#7655D9",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  addButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  card: {
    padding: 17,
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#E9E6F0",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#25213B",
  },
  content: {
    color: "#666",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 15,
  },
  editButton: {
    backgroundColor: "#EEE9FF",
    padding: 10,
    borderRadius: 8,
  },
  editText: {
    color: "#7655D9",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#FEE2E2",
    padding: 10,
    borderRadius: 8,
  },
  deleteText: {
    color: "#DC2626",
    fontWeight: "bold",
  },
  empty: {
    textAlign: "center",
    marginTop: 30,
    color: "gray",
  },
  backButton: {
    backgroundColor: "#25213B",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  backText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
