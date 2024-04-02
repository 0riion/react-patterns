import CharacterList from "../../components/CharacterList";
import useReducerPattern from "./hook";

export default function ReducerPattern() {
  const { characters, loading, error } = useReducerPattern();
  return <CharacterList characters={characters} loading={loading} error={error} />;
}
