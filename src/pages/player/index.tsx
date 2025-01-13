import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamsList } from '../../navigation'
import PlayControls from '../../components/player/PlayControls'
import { allTracks, useDisco } from '../../context/disco'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = NativeStackScreenProps<StackParamsList, 'Player'>

function PlayerScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets()

  const { idx, album } = useDisco()
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
      <Text>{album}</Text>
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
