import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ENTITY_SLICE_NAME } from './constants'
import { EntityNode } from '../entity-node'

import { initialEntityState } from './initial-state'

const entitySlice = createSlice({
  name: ENTITY_SLICE_NAME,
  initialState: initialEntityState,
  reducers: {
    noOp: () => {},
    upsertEntity: (state, action: PayloadAction<Partial<EntityNode>>) => {
      const node = action.payload
      console.debug(node)
      const ref = node?.ref
      if (!ref) {
        console.warn('Supplied Node has no "ref" property.')
        return
      }
      state.lookup[ref] = { ...(state.lookup[ref] || {}), ...node }
    },
    removeEntity: (state, action: PayloadAction<string>) => {
      const ref = action.payload
      if (!ref) {
        console.warn('Ref is necessary parameter when removing node.')
        return
      }
      if (!state.lookup[ref]) {
        console.warn('There is no node associated with that ref.')
        return
      }
      delete state.lookup[ref]
    }
  }
})

export const entityReducer = entitySlice.reducer
export const { upsertEntity, removeEntity, noOp } = entitySlice.actions
