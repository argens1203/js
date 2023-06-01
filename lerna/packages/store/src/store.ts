import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
  AnyAction
} from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { ENTITY_SLICE_NAME, entityReducer } from 'node-entity'
import { RELATIONSHIP_SLICE_NAME, relationshipReducer } from 'node-relationship'
import { serializer } from './serializer'

const reducer = combineReducers({
  [ENTITY_SLICE_NAME]: entityReducer,
  [RELATIONSHIP_SLICE_NAME]: relationshipReducer
})
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
      .concat(serializer)
      .concat(logger)
  }
})

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
