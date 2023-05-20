import { useState } from "react";

interface ChildComponentProps {
  counter: number;
  add: () => void;
  subtract: () => void;
};

function ChildComponent({
  counter,
  add,
  subtract
}: ChildComponentProps) {
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
};

export default function ControlledComponent() {
  const [loading, setLoading] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  function startLoading() {
    setLoading(true);
  }

  function stopLoading() {
    setLoading(false);
  }

  function add() {
    startLoading();

    setTimeout(() => {
      setCounter(counter + 1);
      stopLoading();
    }, 500);
  }

  function subtract() {

    startLoading();

    setTimeout(() => {
      setCounter(counter - 1);
      stopLoading();
    }, 500);

  }

  if (loading) return <p>Loading...</p>;

  return (
    <ChildComponent
      counter={counter}
      add={add}
      subtract={subtract}
    />
  );

};
