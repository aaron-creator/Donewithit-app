import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native.</Text>
      <Text>This is a good app.</Text>
      <Text>This is fine.</Text>
      <Text>Welcome to React Native.</Text>
      <Text>This is a good app.</Text>
      <Text>This is fine.</Text>
      <Text>Welcome to React Native.</Text>
      <Text>This is a good app.</Text>
      <Text>This is fine.</Text>
      <Text>Welcome to React Native.</Text>
      <Text>This is a good app.</Text>
      <Text>This is fine.</Text>
      <Text>Welcome to React Native.</Text>
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
