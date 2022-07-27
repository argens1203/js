import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

import { ENTITY_SLICE_NAME } from "../entity-slice/constants";
import { entityReducer } from "../entity-slice";
import { RELATIONSHIP_SLICE_NAME } from "../relationship-slice/constants";
import { relationshipReducer } from "../relationship-slice";
import { serializer } from "./serializer";

export const reducer = combineReducers({
  [ENTITY_SLICE_NAME]: entityReducer,
  [RELATIONSHIP_SLICE_NAME]: relationshipReducer,
});
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(serializer)
      .concat(logger);
  },
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
