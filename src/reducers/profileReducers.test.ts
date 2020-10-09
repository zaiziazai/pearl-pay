import {
  GET_PROFILES_FAILED,
  GET_PROFILES_LOADING,
  GET_PROFILES_SUCCESS,
} from "../actions/profileActions";
import { IProfile } from "../api/model";
import { status } from "./profileReducers";
import { profileReducer, ProfileState } from "./profileReducers";

describe("profiles Reducers", () => {
  it("should handle GET_PROFILES_LOADING", () => {
    const expectedState: ProfileState = {
      profiles: [],
      status: status.LOADING,
    };
    expect(profileReducer(undefined, { type: GET_PROFILES_LOADING })).toEqual(
      expectedState
    );
  });
  it("should handle GET_PROFILES_SUCCESS", () => {
    const mockQoutes: IProfile[] = [
      {
        name: "Contoso Contoso",
        birthdate: new Date("9/10/1998"),
        position: "Software Engineer",
        aboutMe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
      {
        name: "Contoso Contoso",
        birthdate: new Date("9/10/1998"),
        position: "Software Engineer",
        aboutMe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
      {
        name: "Contoso Contoso",
        birthdate: new Date("9/10/1998"),
        position: "Software Engineer",
        aboutMe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
    ];
    const expectedState: ProfileState = {
      profiles: mockQoutes,
      status: status.SUCCESS,
    };
    expect(
      profileReducer(undefined, {
        type: GET_PROFILES_SUCCESS,
        payload: mockQoutes,
      })
    ).toEqual(expectedState);
  });
  it("should handle GET_PROFILES_FAILED", () => {
    const errorMessage = "Failed to fetch data";
    const expectedState: ProfileState = {
      errorMessage: errorMessage,
      profiles: [],
      status: status.LOADING,
    };
    expect(
      profileReducer(undefined, {
        type: GET_PROFILES_FAILED,
        message: errorMessage,
      })
    ).toEqual(expectedState);
  });
});
