
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import AppNavigator from './app/navigation/AppNavigator'
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  return (
    <>
      <OfflineNotice />

      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
        {/*<AppNavigator />*/}
      </NavigationContainer>
    </>
  )
}


