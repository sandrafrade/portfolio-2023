import {useContext} from 'react'
import CanvasPlayerContext, {defaultContext} from '@/contexts/CanvasPlayer/Context'

export const useCanvasPlayer = () => useContext(CanvasPlayerContext) ?? defaultContext