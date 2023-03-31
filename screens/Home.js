import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/home/Header";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
});
