import { useEffect, useState } from "react";
import { Character } from "../../@types/characters";

/**
 * The hook is responsible managing logic, to avoid the logic being tied to the ComponentComposition.
 * 
 * The controller interface consists of two methods:
 * 
 * - `abort()`: Aborts the request, it means that the request will be cancelled.
 * - `signal`: It is a signal that can be used to abort the request, sin simple words it is a flag that can be used to cancel the request. When the abort method is called, the signal will be set to true. 
 */
export default function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const controller = new AbortController();
  const signal = controller.signal;

  async function fetchCharacters() {
    setLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/people", { signal });
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

    return () => {
      controller.abort();
    };
  }, [controller]);

  return { characters, loading, error };
};
