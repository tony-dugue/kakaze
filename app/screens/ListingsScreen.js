import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'

import colors from "../config/colors"
import routes from '../navigation/routes'
import listingsApi from '../api/listings'
import AppText from "../components/Text";
import Button from "../components/Button";

/*
const listings = [
  { id: 1, title: 'Blouson rouge à vendre', price: 100, image: require('../assets/jacket.jpg')},
  { id: 2, title: 'Canapé en très bon état', price: 1000, image: require('../assets/couch.jpg')}
]
*/

function ListingsScreen({ navigation }) {

  const [listings, setListings] = useState([])
  const [error, setError] = useState(false)

  const loadListings = async () => {
    const response = await listingsApi.getListings()
    console.log(response.data)
    if (!response.ok) return setError(true)
    setError(false)
    setListings(response.data)
  }

  useEffect( () => {
    loadListings()
  }, [])

  return (
    <Screen style={styles.screen}>

      {error && <>
        <AppText>Le chargement des annonces a échouées !</AppText>
        <Button title="Réessayer" onPress={loadListings} />
        </>
      }

      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={ ({ item }) =>
          <Card
            title={item.title}
            subTitle={item.price + "€"}
            imageUrl={item.images[0].url}
            onPress={ () => navigation.navigate(routes.LISTING_DETAILS, item)}
          />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})

export default ListingsScreen;
