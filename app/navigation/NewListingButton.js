import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native'

import colors from "../config/colors"
import {MaterialCommunityIcons} from "@expo/vector-icons";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name={"plus-circle"} color={colors.white} size={40} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    bottom: 20,
    backgroundColor: colors.primary,
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 10,
  }
})

export default NewListingButton;
