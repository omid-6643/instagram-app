import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    marginTop: StatusBar.currentHeight,
  },
});
