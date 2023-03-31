import { StyleSheet, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import Home from "../screens/Home";

const Tab = () => {
  const TabNav = createBottomTabNavigator();
  return (
    <TabNav.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#000" },
      }}
    >
      <TabNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <TabNav.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
      <TabNav.Screen
        name="Reels"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-collection" size={size} color={color} />
          ),
        }}
      />
      <TabNav.Screen
        name="Shopping"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <TabNav.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/profile.jpeg")}
              style={{ width: 30, height: 30, borderRadius: 15 }}
            />
          ),
        }}
      />
    </TabNav.Navigator>
  );
};

export default Tab;

const styles = StyleSheet.create({});
