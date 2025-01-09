import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { getDeviceData } from './deviceStorage'

export type PlayerState = {
  playing: boolean
  position: number
}

const defaultPlayerState: PlayerState = {
  playing: false,
  position: 0,
}

const playerReducer = (
  state: PlayerState,
  action: {
    type: 'update' | 'logout' | 'playpause' | 'play' | 'pause' | 'playreport'
    player?: Partial<PlayerState>
  },
) => {
  switch (action.type) {
    case 'playpause':
      const playing = state.playing
      return {
        ...state,
        playing: !playing,
      }
    case 'play':
      return {
        ...state,
        playing: true,
      }
    case 'pause':
      return {
        ...state,
        playing: false,
      }
    case 'playreport':
      const e = { srcElement: { currentTime: 0, duration: 10 } }
      const position = e.srcElement
        ? e.srcElement.currentTime / e.srcElement.duration
        : 0
      return {
        ...state,
        position: position,
      }
    case 'update':
      return { ...state, ...action.player }
    case 'logout':
      return defaultPlayerState
    default:
      console.error('Unknown action', action)
      return state
  }
}

const PlayerContext = createContext<PlayerState>(defaultPlayerState)
const PlayerDispatchContext = createContext<
  Dispatch<{
    type: 'update' | 'logout'
    player?: Partial<PlayerState>
  }>
>(() => {})

const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [player, setPlayer] = useReducer(playerReducer, defaultPlayerState)

  useEffect(() => {
    const goFetch = async () => {
      const storedPlayer = await getDeviceData('player')
      console.log('stored player', storedPlayer)
      if (storedPlayer) {
        setPlayer({
          type: 'update',
          player: storedPlayer,
        })
      }
    }
    goFetch()
  }, [])

  useEffect(() => {
    console.log('PLAyer', player)
    // storeDeviceData('player', player)
  }, [player])

  return (
    <PlayerContext.Provider value={player}>
      <PlayerDispatchContext.Provider value={setPlayer}>
        {children}
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  )
}

export default PlayerProvider

export const usePlayer = () => {
  return useContext(PlayerContext)
}

export const usePlayerDispatch = () => {
  return useContext(PlayerDispatchContext)
}
