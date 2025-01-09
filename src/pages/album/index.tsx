import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamsList } from '../../navigation'

type Props = NativeStackScreenProps<StackParamsList, 'Player'>

function PlayerScreen({ navigation }: Props) {
  return (
    <View style={styles.screen}>
      <Text>Player Screen</Text>
      <Button onPress={() => navigation.popToTop()} title="Go Home" />
    </View>
  )
}

export default PlayerScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
