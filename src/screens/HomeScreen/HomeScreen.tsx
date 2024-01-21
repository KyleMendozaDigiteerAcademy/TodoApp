import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={Styles.Root}>
      <View style={Styles.Heading}>
        <Text style={Styles.HeadingTitle}>Keep Note</Text>
      </View>
      <View style={Styles.MainContent}></View>
      <TouchableOpacity
        onPress={() => {
          console.log("go to add note screen");
        }}>
        <View>
          <Text>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const Styles = StyleSheet.create({
  Root: {
    flex: 1,
    backgroundColor: "white"
  },
  Heading: {},
  HeadingTitle: {},
  MainContent: {}
});
