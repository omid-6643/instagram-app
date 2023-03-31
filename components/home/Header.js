import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require("../../assets/home-logo.png")} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image source={require("../../assets/icons/plus.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/icons/heart.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>13</Text>
          </View>
          <Image
            source={require("../../assets/icons/messenger.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 20,
  },
  logo: { width: 100, height: 50, resizeMode: "contain" },
  iconsContainer: { flexDirection: "row" },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  badge: {
    position: "absolute",
    backgroundColor: "tomato",
    left: 20,
    top: -2,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  badgeText: {
    color: "white",
    fontWeight: "600",
  },
});
