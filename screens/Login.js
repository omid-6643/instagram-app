import { StyleSheet, View, Image } from "react-native";
import Brand from "../components/login/Brand";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <View style={styles.container}>
      <Brand />
      <LoginForm/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
});
