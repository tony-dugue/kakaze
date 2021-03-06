import React, {useState} from 'react';
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'

import { Form, FormField, FormPicker as Picker, SubmitButton } from '../components/forms'
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";
import listingsApi from '../api/listings'

import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Le titre est obligatoire").min(1, "trop court").label('Titre'),
  price: Yup.number().required("Le prix est obligatoire").min(1, "trop court").max(10000, "trop long").label('Prix'),
  description: Yup.string().label('Description'),
  category: Yup.object().required("Choisir une catégorie").nullable().label('Catégorie'),
  images: Yup.array().required("Une image est obligatoire").min(1, "Veuillez sélectionner au moins une image")
})

const categories = [
  { label: "Meubles", value: 1, backgroundColor: '#fc5c65', icon: 'floor-lamp' },
  { label: "Voitures", value: 2, backgroundColor: '#fd9644', icon: 'car' },
  { label: "Appareils photo", value: 3, backgroundColor: '#fed330', icon: 'camera' },
  { label: "Jeux", value: 4, backgroundColor: '#26de81', icon: 'cards' },
  { label: "Vêtements", value: 5, backgroundColor: '#2bcbba', icon: 'shoe-heel' },
  { label: "Sports", value: 6, backgroundColor: '#45aaf2', icon: 'basketball' },
  { label: "Films & musique", value: 7, backgroundColor: '#4b7bec', icon: 'headphones' },
  { label: "Livres", value: 8, backgroundColor: '#a55eea', icon: 'book-open-variant' },
  { label: "Autres", value: 9, backgroundColor: '#778ca3', icon: 'application' }
]

function ListingEditScreen() {

  const location = useLocation()

  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0)
    setUploadVisible(true)
    const result = await listingsApi.addListing({...listing, location}, progress => setProgress(progress))

    if (!result.ok) {
      setUploadVisible(false)
      return alert('L\'enregistrement de l\'annonce a échoué')
    }

    resetForm()
  }

  return (
    <Screen style={styles.container}>

      <UploadScreen onDone={ () => setUploadVisible(false)} progress={progress} visible={uploadVisible} />

      <Form
        initialValues={{ title: '', price: '', description: '', category: null, images: [] }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >

        <FormImagePicker name="images" />

        <FormField name="title" placeholder="Titre" maxLength={255} />

        <FormField name="price" placeholder="Prix" keyboardType="numeric" maxLength={8} width={120} />

        <Picker name="category" placeholder="Catégorie" items={categories} numberOfColumns={3} PickerItemComponent={CategoryPickerItem} width={'50%'} />

        <FormField name="description" placeholder="Description" maxLength={255} multiline numberOfLines={3} />

        <SubmitButton title="Publier" />

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

export default ListingEditScreen;
