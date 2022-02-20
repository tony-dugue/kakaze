import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import colors from "../config/colors";
import routes from "../navigation/routes";

import useApi from "../hooks/useApi";
import listingsApi from "../api/listings";

import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import Card from "../components/Card";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>

      {/*getListingsApi.error && (
        <>
          <AppText>Le chargement des annonces a échouées !</AppText>
          <Button title="Réessayer" onPress={loadListings} />
        </>
      )*/}

      <ActivityIndicator visible={getListingsApi.loading} />

      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price + "€"}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
