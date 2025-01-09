import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation'
import PlayerProvider from './src/context/player'

function App(): React.JSX.Element {
  return (
    <PlayerProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PlayerProvider>
  )
}

export default App
