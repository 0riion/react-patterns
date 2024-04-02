import { Character } from "./characters";

export interface ReducerState {
  characters: Character[];
  loading: boolean;
  error: boolean;
};

export enum ReducerActionType {
  SET_CHARACTERS = "SET_CHARACTERS",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
};
