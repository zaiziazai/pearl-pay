import {
  GET_QOUTES_FAILED,
  GET_QOUTES_LOADING,
  GET_QOUTES_SUCCESS,
  QoutesActionTypes,
} from "../actions/qoutesActions";
import { IQoutes } from "../api/model";
export enum status {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  LOADING = "LOADING",
}
export interface QoutesState {
  qoutes: IQoutes[];
  status?: status;
  errorMessage?: string
}
export const initialState: QoutesState = {
  qoutes: [],
};

export function qoutesReducer(
  state = initialState,
  action: QoutesActionTypes
): QoutesState {
  switch (action.type) {
    case GET_QOUTES_LOADING:
      return {
        ...state,
        status: status.LOADING,
      };
    case GET_QOUTES_SUCCESS:
      return {
        ...state,
        status: status.SUCCESS,
        qoutes: action.payload,
      };
    case GET_QOUTES_FAILED:
      return {
        ...state,
        status: status.FAILED,
        errorMessage: action.message
      };
    default:
      return state;
  }
}
