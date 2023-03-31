import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screens/Login'
import Home from '../screens/Home'
import Tab from "./Tab";


const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Application" component={Tab} />
    </Stack.Navigator>
  );
};

export default StackNav;
