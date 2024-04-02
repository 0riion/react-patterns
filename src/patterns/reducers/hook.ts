import { useEffect, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { setCharacters, setError, setLoading } from "./actions";

export default function useReducerPattern() {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchCharacters() {
    dispatch(setLoading(true));
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      dispatch(setCharacters(data.results));
    } catch (error) {
      console.error(error);
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return state;
};
