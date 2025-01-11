import AsyncStorage from '@react-native-async-storage/async-storage'
import { PlayerState } from './player'
import { DiscoState } from './disco'

type contextKey = 'disco' | 'player'

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
  value: DiscoState | PlayerState,
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
