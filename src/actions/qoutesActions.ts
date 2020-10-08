import { Dispatch } from "redux";
import { IQoutes } from "../api/model";
import { fetchQoutes } from "../api/qoutesAPI";

export const GET_QOUTES_LOADING = "GET_QOUTES_LOADING";
export const GET_QOUTES_SUCCESS = "GET_QOUTES_SUCCESS";
export const GET_QOUTES_FAILED = "GET_QOUTES_FAILED";

interface GetQoutesSuccessAction {
  type: typeof GET_QOUTES_SUCCESS;
  payload: IQoutes[];
}
interface GetQoutesFailedAction {
  type: typeof GET_QOUTES_FAILED;
  message: string;
}
interface GetQoutesLoadingAction {
  type: typeof GET_QOUTES_LOADING;
}

export function getQoutesSuccess(
  payload: IQoutes[]
): QoutesActionTypes {
  return {
    type: GET_QOUTES_SUCCESS,
    payload,
  };
}

export function getQoutesFailed(message: string): QoutesActionTypes {
  return {
    type: GET_QOUTES_FAILED,
    message
  };
}

export function getQoutesLoading(): QoutesActionTypes {
  return {
    type: GET_QOUTES_LOADING,
  };
}

export function getQoutes(dispatch: Dispatch) {
  dispatch(getQoutesLoading());
  fetchQoutes().then(
    (qoutes) => {
      dispatch(getQoutesSuccess(qoutes));
    },
    (err) => dispatch(getQoutesFailed(err.message))
  );
}

export type QoutesActionTypes = GetQoutesSuccessAction | GetQoutesFailedAction | GetQoutesLoadingAction