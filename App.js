import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("App executed");

  return (
    <View style={styles.container}>
      <Text>Welcome to React Native.</Text>
      <Text>Good app</Text>
      <Text>React native is good.</Text>
      <Text>thank you.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
