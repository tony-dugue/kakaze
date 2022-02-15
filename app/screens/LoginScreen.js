import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppTextInput from "../components/AppTextInput";
import AppText from '../components/AppText'
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("L'email est obligatoire").email("email invalide").label('Email'),
  password: Yup.string().required("Le mot de passe est obligatoire").min(4, "trop court").label('Password')
})

function LoginScreen() {

  return (
    <Screen style={styles.container}>

      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        { ({ handleChange, handleSubmit, errors}) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              placeholder="Email"
              textContentType="emailAddress" // IOS only
            />

            <AppText style={{ color: 'red' }}>{errors.email}</AppText>

            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange('password')}
              placeholder="Mot de passe"
              secureTextEntry
              textContentType="password" // IOS only
            />

            <AppText style={{ color: 'red' }}>{errors.password}</AppText>

            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}

      </Formik>
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
