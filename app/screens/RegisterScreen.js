import React from 'react';
import {StyleSheet, Image} from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'

import { AppForm, AppFormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Le nom est obligatoire").label('Nom'),
  email: Yup.string().required("L'email est obligatoire").email("email invalide").label('Email'),
  password: Yup.string().required("Le mot de passe est obligatoire").min(4, "trop court").label('Password')
})

function RegisterScreen() {

  return (
    <Screen style={styles.container}>

      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Nom"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress" // IOS only
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Mot de passe"
          secureTextEntry
          textContentType="password" // IOS only
        />

        <SubmitButton title="Login" />

      </AppForm>
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

export default RegisterScreen;

