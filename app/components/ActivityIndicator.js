import React from 'react';
import LottieView from 'lottie-react-native'
import {View, StyleSheet} from "react-native";

export default function ActivityIndicator({ visible= false }) {

  if (!visible) return null

  return (
    <View style={styles.overlay}>
      <LottieView source={require('../assets/animations/loader.json')} autoPlay loop />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'white',
    position: 'absolute',
    opacity : 0.8,
    height: '100%',
    width: '100%',
    zIndex: 1
  }
})
