import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'

const prefix = 'cache'
const expiryInMinutes = 5

// Stockage d'une valeur dans le AsyncStorage
const store = async (key, value) => {

  const item = { value, timestamp: Date.now()}

  try {
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item))

    // DEBUG (voir le contenu du cache après avoir ajouter une entrée
    //const value = await AsyncStorage.getItem(prefix + key)
    //console.log('mycache:', JSON.parse(value))

  } catch (error) {
    console.log(error)
  }
}

// vérification si l'item est expiré ou non
const isExpired = item => {
  const now = moment(Date.now())
  const storeTime = moment(item.timestamp)
  return now.diff(storeTime, 'minutes') > expiryInMinutes
}

// Récupération d'une valeur dans le AsyncStorage
const get = async (key) => {

  try {
    const value = await AsyncStorage.getItem(prefix + key)
    const item = await JSON.parse(value)

    // si l'item n'existe pas
    if (!item) return null

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key)
      return null
    }

    return item.value

  } catch (error) {
    console.log(error)
  }
}

export default { store, get }

