import {
  getProfiles,
  GET_PROFILES_FAILED,
  GET_PROFILES_LOADING,
  GET_PROFILES_SUCCESS,
  ProfileActionTypes,
} from "./profileActions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchProfiles } from "../api/profileAPI";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("profileActions", () => {
  const store = mockStore({ profiles: [] });
  describe("getProfiles", () => {
    let expectedActions: ProfileActionTypes[] = [
      { type: GET_PROFILES_LOADING },
    ];
    it("should have GET_PROFILES_LOADING actions", () => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    getProfiles(store.dispatch);
    fetchProfiles().then(
      (profiles) => {
        it("should have GET_PROFILES_LOADING and GET_PROFILES_SUCCESS actions", () => {
          expectedActions.push({
            type: GET_PROFILES_SUCCESS,
            payload: profiles,
          });
          expect(store.getActions()).toEqual(expectedActions);
        });
      },
      (err) => {
        it("should have GET_PROFILES_LOADING and GET_PROFILES_FAILED actions", () => {
          expectedActions.push({
            type: GET_PROFILES_FAILED,
            message: err.message,
          });
          expect(store.getActions()).toEqual(expectedActions);
        });
      }
    );
  });
});
