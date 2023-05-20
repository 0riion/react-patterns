import React, { useState } from "react";
// DumbComponent

interface DumbComponentProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function DumbComponent({ count, onIncrement, onDecrement }: DumbComponentProps) {
  return (
    <div>
      <h3>Dumb Component</h3>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

// DumbComponent

function SmartComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Smart Component</h2>
      <DumbComponent
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

export default SmartComponent;
