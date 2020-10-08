import { Dispatch } from "redux";
import { IProfile } from "../api/model";
import { fetchProfiles } from "../api/profileAPI";

export const GET_PROFILES_LOADING = "GET_PROFILES_LOADING";
export const GET_PROFILES_SUCCESS = "GET_PROFILES_SUCCESS";
export const GET_PROFILES_FAILED = "GET_PROFILES_FAILED";

interface GetProfilesSuccessAction {
  type: typeof GET_PROFILES_SUCCESS;
  payload: IProfile[];
}
interface GetProfilesFailedAction {
  type: typeof GET_PROFILES_FAILED;
  message: string;
}
interface GetProfilesLoadingAction {
  type: typeof GET_PROFILES_LOADING;
}

export function getProfilesSuccess(
  payload: IProfile[]
): ProfileActionTypes {
  return {
    type: GET_PROFILES_SUCCESS,
    payload,
  };
}

export function getProfilesFailed(message: string): ProfileActionTypes {
  return {
    type: GET_PROFILES_FAILED,
    message
  };
}

export function getProfilesLoading(): ProfileActionTypes {
  return {
    type: GET_PROFILES_LOADING,
  };
}

export function getProfiles(dispatch: Dispatch) {
  dispatch(getProfilesLoading());
  fetchProfiles().then(
    (profiles) => {
      dispatch(getProfilesSuccess(profiles));
    },
    (err) => dispatch(getProfilesFailed(err.message))
  );
}

export type ProfileActionTypes = GetProfilesSuccessAction | GetProfilesFailedAction | GetProfilesLoadingAction