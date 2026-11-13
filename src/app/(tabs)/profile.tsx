
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

type PostFormProps = {
  initialTitle?: string;
  initialContent?: string;
  onSubmit: (title: string, content: string) => void;
  buttonText: string;
};

export default function PostForm({
  initialTitle = "",
  initialContent = "",
  onSubmit,
  buttonText,
}: PostFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter post title"
      />

      <Text style={styles.label}>Content</Text>
      <TextInput
        style={[styles.input, styles.content]}
        value={content}
        onChangeText={setContent}
        placeholder="Enter post content"
        multiline
      />

      <Button
        title={buttonText}
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  content: {
    height: 120,
    textAlignVertical: "top",
  },
});
