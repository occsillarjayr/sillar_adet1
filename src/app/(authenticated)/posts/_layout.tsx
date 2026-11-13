
import { Stack } from "expo-router";

export default function PostsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "My Posts" }}
      />

      <Stack.Screen
        name="create"
        options={{ title: "Create Post" }}
      />

      <Stack.Screen
        name="[id]"
        options={{ title: "Edit Post" }}
      />
    </Stack>
  );
}
