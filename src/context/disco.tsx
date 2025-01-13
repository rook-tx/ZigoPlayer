import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { getDeviceData } from './deviceStorage'
import albums, { AlbumKey } from '../content/disco'
import { ImageSourcePropType } from 'react-native'

const albumKeys = ['tihie', 'persuasive', 'foal', 'fox']
export const allTracks = albumKeys.map(album => albums[album].tracks).flat()

export type DiscoState = {
  album: string
  track: string
  idx: number
  obj: {
    ui: string
    src: ImageSourcePropType
    bg: string
    bgType: string
    bgColor: string
    color: string
  }
}

const defaultDiscoState: DiscoState = {
  album: '',
  track: '',
  idx: 0,
  obj: {
    ui: 'fff',
    src: require('../assets/tracks/naam-bg.jpg'),
    bg: '000',
    bgType: 'cover',
    bgColor: '000',
    color: 'fff',
  },
}

const bgs: {
  [key: string]: ImageSourcePropType
} = {
  mellow: require('../assets/tracks/tihie-inner-bg.jpg'),
  touch: require('../assets/tracks/tihie-inner-bg.jpg'),
  smile: require('../assets/tracks/tihie-inner-bg.jpg'),
  'men-her': require('../assets/tracks/tihie-inner-bg.jpg'),
  itch: require('../assets/tracks/tihie-inner-bg.jpg'),
  'worst-kind': require('../assets/tracks/tihie-inner-bg.jpg'),
  london: require('../assets/tracks/tihie-inner-bg.jpg'),
  map: require('../assets/tracks/tihie-inner-bg.jpg'),
  scotch: require('../assets/tracks/tihie-inner-bg.jpg'),
  shattered: require('../assets/tracks/tihie-inner-bg.jpg'),
  ordeal: require('../assets/tracks/tihie-inner-bg.jpg'),
  spanish: require('../assets/tracks/tihie-inner-bg.jpg'),
  persuasive: require('../assets/tracks/persuasive-bg.jpg'),
  'on-your-bones': require('../assets/tracks/on-your-bones-bg.jpg'),
  'war-horse': require('../assets/tracks/war-horse-bg.jpg'),
  hunted: require('../assets/tracks/hunted-bg.jpg'),
  deliverance: require('../assets/tracks/deliverance-bg.jpg'),
  seven: require('../assets/tracks/seven-bg.jpg'),
  interlude: require('../assets/tracks/interlude-bg.jpg'),
  'house-of-sin': require('../assets/tracks/house-of-sin-bg.jpg'),
  'highly-strung': require('../assets/tracks/highly-strung-bg.jpg'),
  grace: require('../assets/tracks/grace-bg.jpg'),
  pact: require('../assets/tracks/pact-bg.jpg'),
  'getting-gone': require('../assets/tracks/getting-gone-bg.jpg'),
}

function pag(state: DiscoState, newIndex: number): DiscoState {
  for (const album in albums) {
    const nextAlbum = albums[album as AlbumKey]
    for (const track in nextAlbum.tracks) {
      const nextTrack = nextAlbum.tracks[track]
      if (nextTrack.scIdx === newIndex) {
        return {
          ...state,
          idx: newIndex,
          album: nextAlbum.slug,
          track: nextTrack.slug,
          obj: {
            ui: nextTrack.ui,
            src: bgs[nextTrack.id],
            bgType: 'cover',
            bg: nextTrack.bg,
            bgColor: nextTrack.bg,
            color: nextTrack.color,
          },
        }
      }
    }
  }
  return defaultDiscoState
}

const DiscoReducer = (
  state: DiscoState,
  action: {
    type: 'update' | 'next' | 'prev' | 'updateTrack'
    disco?: Partial<DiscoState>
  },
) => {
  switch (action.type) {
    case 'update':
      return { ...state, ...action.disco }
    case 'next':
      const nextIdx = state.idx + 1
      return nextIdx > allTracks.length - 1
        ? pag(state, 0)
        : pag(state, nextIdx)
    case 'prev':
      const prevIdx = state.idx - 1
      return prevIdx < 0
        ? pag(state, allTracks.length - 1)
        : pag(state, prevIdx)
    default:
      console.error('Unknown action', action)
      return state
  }
}

const DiscoContext = createContext<DiscoState>(defaultDiscoState)
const DiscoDispatchContext = createContext<
  Dispatch<{
    type: 'update' | 'next' | 'prev' | 'updateTrack'
    disco?: Partial<DiscoState>
  }>
>(() => {})

const DiscoProvider = ({ children }: { children: ReactNode }) => {
  const [disco, setDisco] = useReducer(DiscoReducer, defaultDiscoState)

  useEffect(() => {
    const goFetch = async () => {
      const storedDisco = await getDeviceData('disco')
      if (storedDisco) {
        console.log('stored Disco', storedDisco)
        setDisco({
          type: 'update',
          disco: storedDisco,
        })
      }
    }
    goFetch()
  }, [])

  useEffect(() => {
    console.log('Disco', disco)
    // storeDeviceData('Disco', Disco)
  }, [disco])

  return (
    <DiscoContext.Provider value={disco}>
      <DiscoDispatchContext.Provider value={setDisco}>
        {children}
      </DiscoDispatchContext.Provider>
    </DiscoContext.Provider>
  )
}

export default DiscoProvider

export const useDisco = () => {
  return useContext(DiscoContext)
}

export const useDiscoDispatch = () => {
  return useContext(DiscoDispatchContext)
}
