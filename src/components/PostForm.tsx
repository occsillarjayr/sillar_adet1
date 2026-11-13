
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from "react-native";

type Props = {
  initialTitle?: string;
  initialContent?: string;
  submitLabel: string;
  onSubmit: (title: string, content: string) => void;
};

export default function PostForm({
  initialTitle = "",
  initialContent = "",
  submitLabel,
  onSubmit
}: Props) {

  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  // Submit the form
  const handleSubmit = () => {

    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    onSubmit(title, content);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Post Title</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter post title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Post Content</Text>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter post content"
        value={content}
        onChangeText={setContent}
        multiline
      />

      <Button
        title={submitLabel}
        onPress={handleSubmit}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  },
  textArea: {
    height: 120,
    textAlignVertical: "top"
  }
});
