import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../pages/home'
import PlayerScreen from '../pages/player'
import BandScreen from '../pages/band'
import AlbumScreen from '../pages/album'
import DiscographyScreen from '../pages/discography'

export type StackParamsList = {
  Home: undefined
  Band: undefined
  Player: undefined
  Album: { album: string }
  Discography: undefined
}

const Stack = createNativeStackNavigator<StackParamsList>()

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'ZIGO' }}
      />
      <Stack.Screen name="Discography" component={DiscographyScreen} />
      <Stack.Screen name="Album" component={AlbumScreen} />
      <Stack.Screen name="Player" component={PlayerScreen} />
      <Stack.Screen name="Band" component={BandScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
