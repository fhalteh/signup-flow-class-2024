import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.image}
          source={{ uri: "https://i.ibb.co/BNwMmVn/img.png" }}
          resizeMode="contain"
        />
        <Text style={styles.text}>DIS students</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Create a free account" />
        <Button title="Login" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    color: "#191259",
  },
  buttonContainer: {
    width: "100%",
  },
});
