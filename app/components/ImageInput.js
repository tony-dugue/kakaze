import React, {useEffect} from 'react'
import {View, StyleSheet, Image, TouchableWithoutFeedback, Alert} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from "expo-image-picker"

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {

  // demande de permission à l'utilisateur pour accéder à l'album photo et au GPS
  const requestPermission = async () => {

    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!granted) alert('Kakaze est une application qui utilise l\'album photo ! 😜 ' +
      'Pour continuer, nous avons besoin d\'avoir un accès à l\'album photo' )
  }

  const handlePress = () => {
    if (!imageUri) selectImage()
    else Alert.alert('Supprimer', 'Etes-vous sûr de vouloir supprimer cette image ?', [
      { text: 'Oui', onPress: () => onChangeImage(null) },
      { text: 'Non'}
    ])
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      })
      if (!result.cancelled) onChangeImage(result.uri)
    } catch (error) {
      console.log('Erreur lors de la lecture de l\'image', error)
    }
  }

  useEffect( () => {
    requestPermission()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={handlePress} >
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />}
        {imageUri && <Image source={{ uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: colors.light,
    borderRadius: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default ImageInput;

