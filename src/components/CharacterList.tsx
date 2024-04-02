import { Character } from "../@types/characters";

interface CharacterListProps {
  characters: Character[];
  loading: boolean;
  error: boolean;
}

export default function CharacterList(props: CharacterListProps) {
  if (props.loading) {
    return <div>Loading...</div>;
  }

  if (props.error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      {props.characters.map((character) => (
        <div key={character.name}>{character.name}</div>
      ))}
    </div>
  );
}
