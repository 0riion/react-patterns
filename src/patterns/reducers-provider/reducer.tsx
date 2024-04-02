import { ReducerActionType, ReducerState } from "../../@types/reducer";

export const initialState: ReducerState = {
  characters: [],
  loading: false,
  error: false,
};

export default function reducer(
  state = initialState,
  action: any
): ReducerState {
  switch (action.type) {
    case ReducerActionType.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case ReducerActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ReducerActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
