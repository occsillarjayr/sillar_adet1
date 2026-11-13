
import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import PostForm from "../../../components/PostForm";
import { useApp } from "../../../services/AppContext";

export default function CreatePost() {

  const router = useRouter();
  const { addPost } = useApp();

  // Create new post
  const handleCreate = (title: string, content: string) => {

    addPost(title, content);

    router.replace("/posts");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Create New Post</Text>

      <PostForm
        submitLabel="Create Post"
        onSubmit={handleCreate}
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
    textAlign: "center"
  }
});
