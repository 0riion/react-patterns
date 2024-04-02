import CharacterList from "../../components/CharacterList";
import useCharacters from "./hook";

export default function AbortController() {
  const { characters, loading, error } = useCharacters();
  return (
    <CharacterList characters={characters} loading={loading} error={error} />
  );
}
