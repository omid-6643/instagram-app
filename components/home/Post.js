import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Post = ({ posts }) => {
  return (
    <View style={{ marginTop: 30 }}>
      <PostHeader post={posts} />
      <PostImage post={posts} />
      <PostFooter post={posts} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image source={{ uri: post.profile_img }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: 700 }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);
const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.image }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const FooterButtons = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 10,
    }}
  >
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/heart.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/comment.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/send.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/bookmark.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  </View>
);
const FooterDetails = ({ post }) => <View></View>;

const PostFooter = ({ post }) => (
  <View>
    <FooterButtons />
    <FooterDetails />
  </View>
);

export default Post;

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "tomato",
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: "contain",
  },
});
