/**
 * The Container and presentation pattern is a pattern that aims to separate the presentation logic from the business logic in a react code, thereby making it modular, testable, and one that follows the separations of concern principle.
 *
 */

import { useEffect, useState } from "react";
import CharacterList from "../../components/CharacterList";
import { Character } from "../../@types/characters";

/**
 * The CharactersContainer component is of the logic (fetching data, handling events, validations, etc)
 * While the CharacterList component is of the presentation (displaying data, styling, etc).
 */
export default function ComponentComposition() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  async function fetchCharacters() {
    setLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      setCharacters(data.results);      
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return <CharacterList characters={characters} loading={loading} error={error} />;
}
