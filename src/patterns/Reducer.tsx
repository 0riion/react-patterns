import { useReducer } from 'react';

interface State {
  count: number;
}

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: 'INCREMENT' });
  }

  function decrement() {
    dispatch({ type: 'DECREMENT' });
  }

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default function Reducer() {

  return (
    <>
      <Counter />
    </>
  );

};
