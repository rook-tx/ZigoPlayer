import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamsList } from '../../navigation'

type Props = NativeStackScreenProps<StackParamsList, 'Home'>

function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Band')} title="Go to Band" />
      <Button
        onPress={() => navigation.navigate('Player')}
        title="Go to Player"
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
