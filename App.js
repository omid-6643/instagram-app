import StackNav from "./navigators/StackNav";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
