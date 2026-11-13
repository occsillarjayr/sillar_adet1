
import { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import { useRouter } from "expo-router";
import { useApp } from "../../services/AppContext";

export default function Login() {

  const router = useRouter();
  const { setIsLoggedIn } = useApp();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Login function
  const handleLogin = () => {

    if (username.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please enter your credentials.");
      return;
    }

    // Allow access
    setIsLoggedIn(true);

    router.replace("/(authenticated)/(tabs)/home");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 30
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  }
});
