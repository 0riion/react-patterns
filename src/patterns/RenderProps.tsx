import { useEffect, useState } from "react";

interface Props {
  children: (props: { name: string }) => JSX.Element;
};

function DataFetcher({ children }: Props) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {

    function load() {

      setLoading(true);

      setTimeout(() => {
        setName("Render Props");
        setLoading(false);
      }, 3000);

    };

    load();

  }, [])

  if (loading) {
    return <p>Loading...</p>;
  };

  return children({ name });

};

export default function RenderProps() {

  return (
    <DataFetcher>
      {({ name }) => (
        <div>
          <h1>Render Props</h1>
          <p>Props: {name}</p>
        </div>
      )}
    </DataFetcher>
  );

};
