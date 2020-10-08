import {
    GET_PROFILES_FAILED,
  GET_PROFILES_LOADING,
  GET_PROFILES_SUCCESS,
  ProfileActionTypes,
} from "../actions/profileActions";
import { IProfile } from "../api/model";
export enum status {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  LOADING = "LOADING",
}
export interface ProfileState {
  profiles: IProfile[];
  status?: status;
  errorMessage?: string
}
const initialState: ProfileState = {
  profiles: [],
};

export function profileReducer(
  state = initialState,
  action: ProfileActionTypes
): ProfileState {
  switch (action.type) {
    case GET_PROFILES_LOADING:
      return {
        ...state,
        status: status.LOADING,
      };
    case GET_PROFILES_SUCCESS:
      return {
        ...state,
        status: status.SUCCESS,
        profiles: action.payload
      };
    case GET_PROFILES_FAILED:
      return {
        ...state,
        status: status.FAILED,
        errorMessage: action.message
      };
    default:
      return state;
  }
}
