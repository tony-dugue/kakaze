import React, {useEffect, useState} from 'react'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from "expo-image-picker";
import {Button, Image} from "react-native";

import Screen from './app/components/Screen'

export default function App() {

  const [imageUri, setImageUri] = useState()

  // demande de permission à l'utilisateur pour accéder à l'album photo et au GPS
  const requestPermission = async () => {

    const { granted } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.LOCATION_FOREGROUND)

    if (!granted) alert('Kakaze est une application qui utilise l\'album photo ! 😜 ' +
      'Pour continuer, nous avons besoin d\'avoir un accès à l\'album photo' )
  }

  useEffect( () => {
    requestPermission()
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled) setImageUri(result.uri)
    } catch (error) {
      console.log('Erreur lors de la lecture de l\'image', error)
    }
  }

  return (
    <Screen>
      <Button title={"Sélectionner une image"} onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  )
}

