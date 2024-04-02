import CharacterList from "../../components/CharacterList";
import useCharacters from "./hook";

/**
 * The Component Composition pattern is a pattern that aims to separate the presentation logic from the business logic in a react code, thereby making it modular, testable, and one that follows the separations of concern principle.
 *
 */

export default function ComponentComposition() {
  const { characters, loading, error } = useCharacters();
  return (
    <CharacterList characters={characters} loading={loading} error={error} />
  );
}
