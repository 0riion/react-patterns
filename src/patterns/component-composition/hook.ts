import { useEffect, useState } from "react";
import { Character } from "../../@types/characters";

/**
 * The hook is responsible managing logic, to avoid the logic being tied to the ComponentComposition.
 */
export default function useCharacters() {
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


  return { characters, loading, error };
};
