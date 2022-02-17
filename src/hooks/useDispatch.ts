import { useDispatch as useAppDispatch} from 'react-redux'
import type { AppDispatch } from '../store'

export const useDispatch = () => useAppDispatch<AppDispatch>()