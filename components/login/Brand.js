import { StyleSheet, Image, View } from "react-native";

const Brand = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImage}
        source={require("../../assets/login-logo.png")}
      />
    </View>
  );
};

export default Brand;

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 60,
    alignItems: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
});
