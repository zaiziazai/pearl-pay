import {
  GET_QOUTES_FAILED,
  GET_QOUTES_LOADING,
  GET_QOUTES_SUCCESS,
} from "../actions/qoutesActions";
import { IQoutes } from "../api/model";
import { status } from "./profileReducers";
import { qoutesReducer, QoutesState } from "./qoutesReducers";

describe("qoutes Reducers", () => {
  it("should handle GET_QOUTES_LOADING", () => {
    const expectedState: QoutesState = {
      qoutes: [],
      status: status.LOADING,
    };
    expect(qoutesReducer(undefined, { type: GET_QOUTES_LOADING })).toEqual(
      expectedState
    );
  });
  it("should handle GET_QOUTES_SUCCESS", () => {
    const mockQoutes: IQoutes[] = [
      {
        author: "Contoso Contoso",
        qoute: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
      {
        author: "Contoso Contoso",
        qoute: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
      {
        author: "Contoso Contoso",
        qoute: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
      {
        author: "Contoso Contoso",
        qoute: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
    ];
    const expectedState: QoutesState = {
      qoutes: mockQoutes,
      status: status.SUCCESS,
    };
    expect(
      qoutesReducer(undefined, {
        type: GET_QOUTES_SUCCESS,
        payload: mockQoutes,
      })
    ).toEqual(expectedState);
  });
  it("should handle GET_QOUTES_FAILED", () => {
    const errorMessage = "Failed to fetch data";
    const expectedState: QoutesState = {
      errorMessage: errorMessage,
      qoutes: [],
      status: status.LOADING,
    };
    expect(
      qoutesReducer(undefined, {
        type: GET_QOUTES_FAILED,
        message: errorMessage,
      })
    ).toEqual(expectedState);
  });
});
