import React from "react";
import { Character } from "../../@types/characters";
import useCharacters from "./hook";

interface Props {
  characters: Character[];
  loading: boolean;
  error: boolean;
}

interface AdditionalProps {}

function withDataFetching(WrappedComponent: React.FC<Props & AdditionalProps>) {
  return function WithDataFetching(props: AdditionalProps) {
    const { characters, loading, error } = useCharacters();
    return (
      <WrappedComponent
        characters={characters}
        loading={loading}
        error={error}
        {...props}
      />
    );
  };
}

function HighOrderComponent(props: Props & AdditionalProps) {
  const { characters } = props;
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default withDataFetching(HighOrderComponent);
