
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import { useApp } from "../../../services/AppContext";

export default function Profile() {
  const router = useRouter();
  const { setIsLoggedIn } = useApp();

  // LOGOUT FUNCTION
  const handleLogout = () => {
    console.log("Logout button clicked!");

    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes, Logout",
          style: "destructive",
          onPress: () => {
            setIsLoggedIn(false);

            router.replace("/(unauthenticated)/login");
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <Text style={styles.headerTitle}>My Profile</Text>

      {/* Profile Information */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>C</Text>
        </View>

        <Text style={styles.name}>Canva User</Text>

        <Text style={styles.email}>
          Welcome to your account!
        </Text>
      </View>

      {/* Account Section */}
      <Text style={styles.sectionTitle}>Account</Text>

      <View style={styles.menuCard}>

        <View style={styles.menuItem}>
          <Text style={styles.menuIcon}>👤</Text>

          <View style={styles.menuInfo}>
            <Text style={styles.menuTitle}>
              Personal Information
            </Text>

            <Text style={styles.menuSubtitle}>
              Manage your profile details
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.menuItem}>
          <Text style={styles.menuIcon}>⚙️</Text>

          <View style={styles.menuInfo}>
            <Text style={styles.menuTitle}>Settings</Text>

            <Text style={styles.menuSubtitle}>
              Manage your app preferences
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.menuItem}>
          <Text style={styles.menuIcon}>🔒</Text>

          <View style={styles.menuInfo}>
            <Text style={styles.menuTitle}>Privacy</Text>

            <Text style={styles.menuSubtitle}>
              Your account and privacy
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </View>

      </View>

      {/* About Section */}
      <Text style={styles.sectionTitle}>About</Text>

      <View style={styles.menuCard}>
        <View style={styles.menuItem}>
          <Text style={styles.menuIcon}>ℹ️</Text>

          <View style={styles.menuInfo}>
            <Text style={styles.menuTitle}>About Canva</Text>

            <Text style={styles.menuSubtitle}>
              Version 1.0.0
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </View>
      </View>

      {/* LOGOUT BUTTON */}
      <Pressable
  style={styles.logoutButton}
  onPress={() => {
    setIsLoggedIn(false);
    router.replace("/(unauthenticated)/login");
  }}
>
  <Text style={styles.logoutText}>Logout</Text>
</Pressable>
      {/* Footer */}
      <Text style={styles.footer}>
        Made with creativity 💜
      </Text>

    </ScrollView>
  );
}

// STYLES
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F8F7FC",
    padding: 20,
  },

  headerTitle: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#25213B",
    marginTop: 35,
    marginBottom: 25,
  },

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 25,
    alignItems: "center",
    marginBottom: 28,
  },

  avatar: {
    width: 85,
    height: 85,
    borderRadius: 45,
    backgroundColor: "#7655D9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "bold",
  },

  name: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#25213B",
  },

  email: {
    fontSize: 13,
    color: "#888888",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#25213B",
    marginBottom: 12,
  },

  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 15,
    marginBottom: 25,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 17,
  },

  menuIcon: {
    fontSize: 22,
    marginRight: 14,
  },

  menuInfo: {
    flex: 1,
  },

  menuTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#25213B",
  },

  menuSubtitle: {
    fontSize: 11,
    color: "#999999",
    marginTop: 4,
  },

  arrow: {
    fontSize: 25,
    color: "#999999",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
  },

  logoutButton: {
    backgroundColor: "#FEE2E2",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
  },

  logoutText: {
    color: "#DC2626",
    fontSize: 15,
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    color: "#999999",
    fontSize: 12,
    marginTop: 25,
    marginBottom: 30,
  },

});
