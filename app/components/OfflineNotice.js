import React from 'react';
import {View, StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import Text from './Text'
import { useNetInfo } from "@react-native-community/netinfo";

import colors from '../config/colors'

function OfflineNotice() {

  const netInfo = useNetInfo()

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pas de connexion internet</Text>
      </View>
    )
  }

  return null
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.primary,
    height: 50,
    position: 'absolute',
    top: Constants.statusBarHeight,
    zIndex: 1
  },
  text: {
    color: colors.white
  }
})

export default OfflineNotice;

