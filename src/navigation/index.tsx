import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../pages/home'
import PlayerScreen from '../pages/album'
import BandScreen from '../pages/band'

export type StackParamsList = {
  Home: undefined
  Band: undefined
  Player: undefined
}

const Stack = createNativeStackNavigator<StackParamsList>()

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'ZIGO' }}
      />
      <Stack.Screen name="Band" component={BandScreen} />
      <Stack.Screen name="Player" component={PlayerScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
