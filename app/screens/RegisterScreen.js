import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native'
import * as Yup from 'yup'

import usersApi from '../api/users'
import authApi from '../api/auth'
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";

import Screen from '../components/Screen'
import ActivityIndicator from '../components/ActivityIndicator'

import { ErrorMessage, Form, FormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Le nom est obligatoire").label('Nom'),
  email: Yup.string().required("L'email est obligatoire").email("email invalide").label('Email'),
  password: Yup.string().required("Le mot de passe est obligatoire").min(4, "trop court").label('Password')
})

function RegisterScreen() {

  const registerApi = useApi(usersApi.register)
  const loginApi = useApi(authApi.login)

  const auth = useAuth()
  const [error, setError] = useState()

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo)

    if (!result.ok) {
      if (result.data) setError(result.data.error)
      else {
        setError("Une erreur s'est produite")
        console.log(result)
      }
      return
    }

     const { data: authToken} = await loginApi.request(
       userInfo.email,
       userInfo.password
     )
     auth.login(authToken)
  }

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading}/>

      <Screen style={styles.container}>

        <Image style={styles.logo} source={require('../assets/logo-red.png')} />

        <Form
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >

          <ErrorMessage error={error} visible={error} />

          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Nom"
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress" // IOS only
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Mot de passe"
            secureTextEntry
            textContentType="password" // IOS only
          />

          <SubmitButton title="Créer le compte" />

        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
})

export default RegisterScreen;

