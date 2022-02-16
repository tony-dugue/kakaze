import React from 'react';
import {StyleSheet, Image} from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'

import { Form, FormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
  email: Yup.string().required("L'email est obligatoire").email("email invalide").label('Email'),
  password: Yup.string().required("Le mot de passe est obligatoire").min(4, "trop court").label('Password')
})

function LoginScreen() {

  return (
    <Screen style={styles.container}>

      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
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

        <SubmitButton title="Login" />

      </Form>
    </Screen>
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

export default LoginScreen;

