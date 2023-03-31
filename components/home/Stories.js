import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import users from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginTop: 15 }}>
      <ScrollView horizontal>
        {users.map((item, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <Image source={{ uri: item.image }} style={styles.story} />
            <Text style={{ color: "white" }}>{item.username}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 6,
    borderWidth:3,
    borderColor: 'tomato'
  },
});
