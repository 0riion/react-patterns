import { createContext, useEffect, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { setCharacters, setError, setLoading } from "./actions";
import { ReducerState } from "../../@types/reducer";

interface ProviderProps {
  children: JSX.Element;
}

export const CharacterContext = createContext<ReducerState>(initialState);

export default function Provider(props: ProviderProps) {
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

  return (
    <CharacterContext.Provider value={state}>
      {props.children}
    </CharacterContext.Provider>
  );
}
