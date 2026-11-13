
import { Redirect } from "expo-router";
import { useApp } from "../services/AppContext";

export default function Index() {
  const { isLoggedIn } = useApp();

  // Check login status
  if (isLoggedIn) {
    return <Redirect href="/(authenticated)/(tabs)/home" />;
  }

  return <Redirect href="/(unauthenticated)/login" />;
}
