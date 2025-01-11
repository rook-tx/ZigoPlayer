import React from 'react'
import { StyleSheet, View } from 'react-native'
import Trackbar from '../../modules/Trackbar'
import PlayerButton from '../../modules/PlayerButton'
import { usePlayerDispatch } from '../../../context/player'
import { useDiscoDispatch } from '../../../context/disco'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

function PlayControls() {
  const insets = useSafeAreaInsets()

  const updatePlayer = usePlayerDispatch()
  const updateDisco = useDiscoDispatch()

  function playpause() {
    updatePlayer({ type: 'playpause' })
  }

  function next() {
    updateDisco({ type: 'next' })
  }

  function prev() {
    updateDisco({ type: 'prev' })
  }

  return (
    <View
      style={{
        ...styles.playControls,
        bottom: insets.bottom,
      }}>
      <Trackbar />
      <PlayerButton type="prev" onPress={() => prev()} />
      <PlayerButton onPress={() => playpause()} />
      <PlayerButton type="next" onPress={() => next()} />
    </View>
  )
}

const styles = StyleSheet.create({
  playControls: {
    // background-image linear-gradient(180deg, rgba($b, 0), rgba($b, .25))
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 0,
    height: '10%',
    left: 0,
    maxWidth: '100%',
    position: 'absolute',
    right: 0,
    // transition max-width 1s $easeInOutCubic
    // transition-property max-width, background-image
    // z-index 5

    // &.short {
    //   +above($mobile) {
    //     background-image linear-gradient(180deg, rgba($b, 0), rgba($b, 0))
    //     max-width 11.6*3vh
    //   }
    // }
  },
})

export default PlayControls
