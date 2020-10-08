import { profileReducer } from "./profileReducers"
import { combineReducers } from 'redux';
import { qoutesReducer } from "./qoutesReducers";

export const rootReducer = combineReducers ({
  profiles: profileReducer,
  qoutes: qoutesReducer
})

export type RootState = ReturnType<typeof rootReducer>