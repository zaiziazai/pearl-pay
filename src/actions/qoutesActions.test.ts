import {
  getQoutes,
  GET_QOUTES_FAILED,
  GET_QOUTES_LOADING,
  GET_QOUTES_SUCCESS,
  QoutesActionTypes,
} from "./qoutesActions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchQoutes } from "../api/qoutesAPI";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("profileActions", () => {
  const store = mockStore({ profiles: [] });
  describe("getQoutes", () => {
    let expectedActions: QoutesActionTypes[] = [{ type: GET_QOUTES_LOADING }];

    it("should have GET_QOUTES_LOADING actions", () => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    getQoutes(store.dispatch);
    fetchQoutes().then(
      (profiles) => {
        it("should have GET_QOUTES_LOADING and GET_QOUTES_SUCCESS actions", () => {
          expectedActions.push({ type: GET_QOUTES_SUCCESS, payload: profiles });
          expect(store.getActions()).toEqual(expectedActions);
        });
      },
      (err) => {
        it("should have GET_QOUTES_LOADING and GET_QOUTES_FAILED actions", () => {
          expectedActions.push({
            type: GET_QOUTES_FAILED,
            message: err.message,
          });
          expect(store.getActions()).toEqual(expectedActions);
        });
      }
    );
  });
});
