import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Posts = ({ post }) => {
  return (
    <View style={{ marginTop: 30 }}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => <View></View>;
const PostImage = ({ post }) => <View></View>;
const PostFooter = ({ post }) => <View></View>;

export default Posts;

const styles = StyleSheet.create({});
