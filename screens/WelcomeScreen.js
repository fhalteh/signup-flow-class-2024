import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
import CustomButton, { ButtonType } from "../components/CustomButton";

export default function WelcomeScreen({ navigation }) {
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
        <CustomButton title="Create a free account" type={ButtonType.PRIMARY} onPress={() => navigation.navigate("Name")}/>
        <CustomButton title="Login" type={ButtonType.SECONDARY}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
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
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 16,
    height: 126,
    justifyContent: "space-between",
  },
});
