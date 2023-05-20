import React, { useState } from "react";

type StateInitializationProps = {
  name: string;
  age?: number;
};

const StateInitialization: React.FC<StateInitializationProps> = ({
  name,
  age = 30,
}) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default StateInitialization;
