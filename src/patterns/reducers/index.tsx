import { useContext } from "react";
import CharacterList from "../../components/CharacterList";
import Provider, { CharacterContext } from "./Provider";

function ReducerProviderPattern() {
  const { characters, loading, error } = useContext(CharacterContext);
  return (
    <CharacterList characters={characters} loading={loading} error={error} />
  );
}

export default function Wrapper() {
  return (
    <Provider>
      <ReducerProviderPattern />
    </Provider>
  );
}
