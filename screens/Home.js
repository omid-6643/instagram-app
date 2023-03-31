import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

import Posts from "../data/posts";
import Post from "../components/home/Post";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {Posts.map((item, index) => (
          <Post posts={item} key={index} />
        ))}
      </ScrollView>
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
