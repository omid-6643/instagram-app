import { StyleSheet, View, Image } from "react-native";
import Brand from "../components/Brand";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Brand />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
});
