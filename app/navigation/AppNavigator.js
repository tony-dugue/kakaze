import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Annonces" component={ListingsScreen} />
      <Tab.Screen name="Créer une annonce" component={ListingEditScreen} />
      <Tab.Screen name="Compte" component={AccountScreen} />
    </Tab.Navigator>
  )
}

export default AppNavigator;

