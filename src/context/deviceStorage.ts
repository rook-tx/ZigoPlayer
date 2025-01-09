import AsyncStorage from '@react-native-async-storage/async-storage'
// import { UserState } from './user'
import { PlayerState } from './player'

type contextKey = 'user' | 'player'

export const getDeviceData = async (key: contextKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    console.log('from store', key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    // error reading value
    console.error('Error fetching', key, e)
  }
}

export const storeDeviceData = async (
  key: contextKey,
  value: PlayerState, // UserState | ,
) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
    console.log('stored', key)
  } catch (e) {
    // saving error
    console.error('Error storing', key, e)
  }
}
