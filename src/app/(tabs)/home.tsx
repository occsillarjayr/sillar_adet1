
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {

  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome to My App!</Text>

      <Text style={styles.subtitle}>
        Manage your posts using CRUD operations.
      </Text>

      {/* Navigate to Posts */}
      <Button
        title="Manage Posts"
        onPress={() => router.push("/posts")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitle: {
    marginBottom: 20,
    color: "gray"
  }
});
