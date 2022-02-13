import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from "../config/colors"

function ViewImageScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} color={"white"} />
      </View>

      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" size={35} color={"white"} />
      </View>

      <Image
        source={require('../assets/chair.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
    )
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default ViewImageScreen;
