import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function NameScreen({ navigation }) {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>What's your name?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Next" type="primary" onPress={() => navigation.navigate("DOB")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    topContainer: {
      padding: 16,
    },
    container: {
      flex: 1,
      justifyContent: "space-between",
      padding: 10,
      backgroundColor: "white",
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 16,
    },
    input: {
      height: 66,
      fontSize: 20,
      borderColor: "#BBBBBB",
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
    },
    buttonContainer: {
      width: "100%",
      paddingHorizontal: 16,
    },
  });
  