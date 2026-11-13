
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: true,
      tabBarActiveTintColor: "blue"
    }}>

      <Tabs.Screen
        name="home"
        options={{
          title: "Home"
        }}
      />

      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects"
        }}
      />

      <Tabs.Screen
        name="templates"
        options={{
          title: "Templates"
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile"
        }}
      />

    </Tabs>
  );
}
