import { Character } from "../../@types/characters";
import { ReducerActionType } from "../../@types/reducer";

export const setLoading = (loading: boolean) => ({
  type: ReducerActionType.SET_LOADING,
  payload: loading,
});

export const stopLoading = () => ({
  type: ReducerActionType.SET_LOADING,
  payload: false,
});

export const setError = (error: boolean) => ({
  type: ReducerActionType.SET_ERROR,
  payload: error,
});

export const setCharacters = (characters: Character[]) => ({
  type: ReducerActionType.SET_CHARACTERS,
  payload: characters,
});

