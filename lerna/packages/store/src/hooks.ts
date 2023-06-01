import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useGetChildrenRef(ref: string) {
  const childrenObj = useAppSelector(
    (state) => state.relationship.backwardQuery[ref]
  )
  const children = Object.keys(childrenObj || {})
  return children
}
