import { useEffect, useState } from "react";

interface DataItem {
  id: number;
  name: string;
  description: string;
};

function Item({ item }: { item: DataItem }) {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default function ContainerComponent() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataItem[]>([]);

  function generateData() {
    const data = [];

    for (let i = 0; i < 5; i++) {
      data.push({
        id: i,
        name: `Item Title ${i}`,
        description: `Description ${i}`
      });
    }

    return data;
  };

  useEffect(() => {

    function fetchData() {

      setLoading(true);

      setTimeout(() => {
        setData(generateData());
        setLoading(false);
      }, 3000);

    };

    fetchData();

  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {data.map(item => <Item key={item.id} item={item} />)}
    </div>
  );
};
