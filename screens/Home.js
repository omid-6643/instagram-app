import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

import posts from "../data/posts";
import Posts from "../components/home/Posts";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <Posts posts={posts[0]} />
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
