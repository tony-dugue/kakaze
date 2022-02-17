import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator()

const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Annonces" component={ListingsScreen} />
      <Stack.Screen name="Annonce" component={ListingDetailsScreen} />
    </Stack.Navigator>
  )
}

export default FeedNavigator;

