import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { usePlayer } from '../../../context/player'
import Svg, { G, Path, Rect } from 'react-native-svg'

function PlayerButton({
  type = 'playpause',
  fill = 'currentColor',
  onPress = () => {},
}: {
  type?: 'playpause' | 'prev' | 'next'
  fill?: string
  onPress?: () => void
}) {
  const { playing } = usePlayer()

  return (
    <Pressable
      style={{
        ...styles.playerButton,
        ...styles[type],
      }}
      onPress={() => onPress()}>
      <Svg viewBox="0 0 116 100" width="100%" height="100%" fill={fill}>
        {type === 'playpause' && (
          <G>
            {playing ? (
              <G id="pause">
                <Rect x="34" y="25" width="19" height="50" rx="1" ry="1" />
                <Rect x="63" y="25" width="19" height="50" rx="1" ry="1" />
              </G>
            ) : (
              <Path
                id="play"
                d="M85.92 50.61a.65.65 0 0 0 0-1.22L35.06 20c-.58-.34-1.06-.06-1.06.61v58.76c0 .67.48.95 1.06.61z"
              />
            )}
          </G>
        )}

        {type === 'prev' && (
          <G>
            <Path d="M30.53 49.5a.53.53 0 0 0 0 1l27.13 15.67c.48.28.87 0 .87-.5V34.33c0-.55-.39-.77-.87-.5z" />
            <Path d="M49.77 49.5a.53.53 0 0 0 0 1l27.14 15.67c.48.28.87 0 .87-.5V34.33c0-.55-.39-.77-.87-.5z" />
          </G>
        )}

        {type === 'next' && (
          <G>
            <Path d="M85.47 50.5a.53.53 0 0 0 0-1L58.34 33.83c-.48-.27-.87-.05-.87.5v31.34c0 .55.39.78.87.5z" />
            <Path d="M66.23 50.5a.53.53 0 0 0 0-1L39.09 33.83c-.48-.27-.87-.05-.87.5v31.34c0 .55.39.78.87.5z" />
          </G>
        )}
      </Svg>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  playerButton: {
    borderWidth: 0,
    // height: '10vh',
    height: '100%',
    aspectRatio: 116 / 100,
    // marginLeft: '-5.8vh',
    // width: '11.6vh',
  },
  playpause: {},
  next: {
    // marginLeft: 100,
  },
  prev: {
    // marginLeft: -200,
  },
})

export default PlayerButton
