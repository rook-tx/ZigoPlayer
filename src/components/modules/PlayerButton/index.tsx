import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { usePlayer } from '../../../context/player'

function PlayerButton({
  type = 'playpause',
  buttonDown = false,
  fill = 'currentColor',
}) {
  const { playing } = usePlayer()

  return (
    <Pressable
      // type="button"
      // class={[type, 'player-button', buttonDown ? 'down' : '']}
      style={{
        ...styles.playerButton,
        ...(buttonDown && styles.down),
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 116 100"
        width="116"
        height="100"
        fill={fill}
        focusable="false">
        {type === 'playpause' && (
          <g>
            {playing ? (
              <g id="pause">
                <rect x="34" y="25" width="19" height="50" rx="1" ry="1" />
                <rect x="63" y="25" width="19" height="50" rx="1" ry="1" />
              </g>
            ) : (
              <path
                id="play"
                d="M85.92 50.61a.65.65 0 0 0 0-1.22L35.06 20c-.58-.34-1.06-.06-1.06.61v58.76c0 .67.48.95 1.06.61z"
              />
            )}
          </g>
        )}

        {type === 'prev' && (
          <g>
            <path d="M30.53 49.5a.53.53 0 0 0 0 1l27.13 15.67c.48.28.87 0 .87-.5V34.33c0-.55-.39-.77-.87-.5z" />
            <path d="M49.77 49.5a.53.53 0 0 0 0 1l27.14 15.67c.48.28.87 0 .87-.5V34.33c0-.55-.39-.77-.87-.5z" />
          </g>
        )}

        {type === 'next' && (
          <g>
            <path d="M85.47 50.5a.53.53 0 0 0 0-1L58.34 33.83c-.48-.27-.87-.05-.87.5v31.34c0 .55.39.78.87.5z" />
            <path d="M66.23 50.5a.53.53 0 0 0 0-1L39.09 33.83c-.48-.27-.87-.05-.87.5v31.34c0 .55.39.78.87.5z" />
          </g>
        )}
      </svg>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  playerButton: {},
  down: {},
})

export default PlayerButton
