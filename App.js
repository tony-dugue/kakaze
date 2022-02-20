import React, {useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthContext from './app/auth/context'

import AppNavigator from './app/navigation/AppNavigator'
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {

  const [user, setUser] = useState()

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />

      <NavigationContainer theme={navigationTheme}>

        {user ? <AppNavigator /> : <AuthNavigator /> }

      </NavigationContainer>
    </AuthContext.Provider>
  )
}


