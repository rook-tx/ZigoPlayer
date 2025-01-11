import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation'
import PlayerProvider from './src/context/player'
import DiscoProvider from './src/context/disco'

function App(): React.JSX.Element {
  return (
    <DiscoProvider>
      <PlayerProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PlayerProvider>
    </DiscoProvider>
  )
}

export default App
