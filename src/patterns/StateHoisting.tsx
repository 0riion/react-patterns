import { useState } from "react";

function ChildComponent(props: IChildComponentProps) {
  const { count, onIncrement } = props;
  
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

function ParentComponent() {
  const [count, setCount] = useState(0);
  
  function incrementCount() {
    setCount(count + 1);
  }
  
  return (
    <div>
      <ChildComponent count={count} onIncrement={incrementCount} />
    </div>
  );
}

interface IChildComponentProps {
  count: number;
  onIncrement: () => void;
};

export default function StateHoisting() {
  
  return (
    <>
      <ParentComponent />
    </>
  );
  
};
