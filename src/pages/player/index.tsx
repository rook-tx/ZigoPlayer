import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamsList } from '../../navigation'
import PlayControls from '../../components/player/PlayControls'
import { useDisco } from '../../context/disco'
import discoData from '../../content/disco.json'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = NativeStackScreenProps<StackParamsList, 'Player'>

const allTracks = Object.keys(discoData)
  .map(album => discoData[album].tracks)
  .flat()

console.log(allTracks)

function PlayerScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets()

  const { idx } = useDisco()
  const [trackName, setTrackName] = useState('')

  useEffect(() => {
    setTrackName(allTracks[idx].title)
  }, [idx])

  return (
    <View
      style={{
        ...styles.screen,
        paddingTop: insets.top,
      }}>
      <Text>Player Screen</Text>
      <Text>{trackName}</Text>
      <PlayControls />
      <Button onPress={() => navigation.popToTop()} title="Go Home" />
    </View>
  )
}

export default PlayerScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
})
