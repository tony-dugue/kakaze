import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from "../screens/ListingEditScreen"
import NewListingButton from "./NewListingButton"
import FeedNavigator from "./FeedNavigator"
import AccountNavigator from "./AccountNavigator"

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Annonces" component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size}) =>
            <MaterialCommunityIcons name="home" color={color} size={size} />
        }}
      />

      <Tab.Screen name="Créer une annonce" component={ListingEditScreen}
        options={ ({ navigation }) => ({
          tabBarButton: () => <NewListingButton onPress={ () => navigation.navigate("Créer une annonce") } />,
          tabBarIcon: ({ color, size}) =>
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
        })}
      />

      <Tab.Screen name="Compte utilisateur" component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size}) =>
            <MaterialCommunityIcons name="account" color={color} size={size} />
        }}
      />

    </Tab.Navigator>
  )
}

export default AppNavigator;

