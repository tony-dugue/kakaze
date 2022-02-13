import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background3.jpg')}
    >

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Vendez ce dont vous n'avez plus besoin</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="Se connecter" />
        <AppButton title="Créer un compte" color="secondary" />
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonsContainer: {
    padding: 20,
    width: '100%'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    padding: 20,
    textAlign: 'center'
  }
})

export default WelcomeScreen;

