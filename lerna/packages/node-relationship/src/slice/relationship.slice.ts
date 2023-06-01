import { createSlice } from '@reduxjs/toolkit'
import { MIN_PRIORITY } from './constants'

import { initialRelationshipState } from './initial-state'

const relationshipSlice = createSlice({
  name: 'relationship',
  initialState: initialRelationshipState,
  reducers: {
    // Does not check relationship type. Do it in thunk
    addRelationship: (state, action) => {
      const { ref, from, to, priority = MIN_PRIORITY } = action.payload
      console.info('Adding relationship to slice')
      console.info(action.payload)
      if (state.lookup[ref]) {
        console.warn(
          `Fail to add relationship - Relationship Ref: ${ref} already exists.`
        )
        return
      }
      if (!ref || !from || !to) {
        console.warn(`Fail to add relationship - Incorrect input`)
        return
      }
      if (!state.fowardQuery[from]) {
        state.fowardQuery[from] = {}
      }
      state.fowardQuery[from][to] = ref

      if (!state.backwardQuery[to]) {
        state.backwardQuery[to] = {}
      }
      state.backwardQuery[to][from] = ref
      state.lookup[ref] = { ...action.payload, priority }
    },
    removeRelationship: (state, action) => {
      let { from, to, ref } = action.payload
      console.info('Removing relationship from slice')
      console.info(action.payload)

      if (!(from || to) && !ref) {
        console.warn('Fail to remove relationship - Incorrect input')
        return
      }
      if (ref) {
        from = state.lookup[ref]?.data?.from
        to = state.lookup[ref]?.data?.to
      } else {
        ref = state.fowardQuery[from][to]
      }

      delete state.lookup[ref]
      delete state.fowardQuery[from][to]
      delete state.backwardQuery[to][from]
    }
  }
})

export const relationshipReducer = relationshipSlice.reducer
export const { addRelationship, removeRelationship } = relationshipSlice.actions
