import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Information" component={FeedNavigator}  options={{ headerShown: false }} />
      <Tab.Screen name="Créer une annonce" component={ListingEditScreen} />
      <Tab.Screen name="Compte" component={AccountNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default AppNavigator;

