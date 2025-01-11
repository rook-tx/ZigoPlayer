import React from 'react'
import { StyleSheet, View } from 'react-native'

function Trackbar() {
  return (
    <View style={styles.trackbar}>
      <View
        style={styles.progress}
        // style="{
        //   backgroundColor: color,
        //   transform: `translate3d(${trackPosition * -100}%,0,0)`
        // }"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  trackbar: {
    // background rgba($b, .1)
    backgroundColor: 'rgba(0,0,0,.5)',
    height: 1,
    // left $gut * 1em
    // right $gut * 1em
    overflow: 'hidden',
    position: 'absolute',
    top: -1,
    // +above($mobile) {
    //   left 5.8vh
    //   right 5.8vh
    // }
  },
  progress: {
    // background $b
    height: '100%',
    left: 0,
    position: 'absolute',
    // transform translate3d(-100%,0,0)
    top: 0,
    width: '100%',
  },
})

export default Trackbar
