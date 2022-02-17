import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Information" component={FeedNavigator}  options={{ headerShown: false }} />
      <Tab.Screen name="Créer une annonce" component={ListingEditScreen} />
      <Tab.Screen name="Compte" component={AccountScreen} />
    </Tab.Navigator>
  )
}

export default AppNavigator;

