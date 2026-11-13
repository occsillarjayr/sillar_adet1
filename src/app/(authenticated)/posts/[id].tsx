

import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View
} from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";

import PostForm from "../../../components/PostForm";
import { useApp } from "../../../services/AppContext";

export default function EditPost() {

  const router = useRouter();

  // Get ID from route
  const { id } = useLocalSearchParams<{ id: string }>();

  const { posts, updatePost, deletePost } = useApp();

  // Find selected post
  const post = posts.find(item => item.id === id);

  // UPDATE
  const handleUpdate = (title: string, content: string) => {

    updatePost(id, title, content);

    Alert.alert("Success", "Post updated successfully!");

    router.replace("/posts");
  };

  // DELETE
  const handleDelete = () => {

    Alert.alert(
      "Delete Post",
      "Are you sure you want to delete this post?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deletePost(id);
            router.replace("/posts");
          }
        }
      ]
    );
  };

  // Check if post exists
  if (!post) {
    return (
      <View style={styles.container}>
        <Text>Post not found.</Text>

        <Button
          title="Go Back"
          onPress={() => router.replace("/posts")}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Edit Post</Text>

      {/* Update post */}
      <PostForm
        initialTitle={post.title}
        initialContent={post.content}
        submitLabel="Update Post"
        onSubmit={handleUpdate}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  deleteButton: {
    marginHorizontal: 20,
    marginTop: 10
  }
});
