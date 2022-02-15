import React from 'react';
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'

import { AppForm, AppFormField as FormField, AppFormPicker as Picker, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Le titre est obligatoire").min(1, "trop court").label('Titre'),
  price: Yup.number().required("Le prix est obligatoire").min(1, "trop court").max(10000, "trop long").label('Prix'),
  description: Yup.string().label('Description'),
  category: Yup.object().required("Choisir une catégorie").nullable().label('Catégorie')
})

const categories = [
  { label: "Meubles", value: 1 },
  { label: "Vêtements", value: 2 },
  { label: "Appareils photo", value: 3 }
]

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>

      <AppForm
        initialValues={{ title: '', price: '', description: '', category: null }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField name="title" placeholder="Titre" maxLength={255} />

        <FormField name="price" placeholder="Prix" keyboardType="numeric" maxLength={8} />

        <Picker name="category" placeholder="Catégorie" items={categories} />

        <FormField name="description" placeholder="Description" maxLength={255} multiline numberOfLines={3} />

        <SubmitButton title="Publier" />

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

export default ListingEditScreen;
