import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { getDeviceData } from './deviceStorage'

export type DiscoState = {
  album: string
  track: string
  idx: number
  obj: {
    ui: string
    src: string
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
    src: '/static/tracks/naam-bg.jpg',
    bg: '000',
    bgType: 'cover',
    bgColor: '000',
    color: 'fff',
  },
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
      if (nextIdx > 23) {
        return { ...state, idx: 0 }
      }
      return { ...state, idx: nextIdx }
    case 'prev':
      const prevIdx = state.idx - 1
      if (prevIdx < 0) {
        return { ...state, idx: 23 }
      }
      return { ...state, idx: prevIdx }
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
      console.log('stored Disco', storedDisco)
      if (storedDisco) {
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
