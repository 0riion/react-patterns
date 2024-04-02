import { createContext, useContext, useState } from "react";

interface ToggleContextProps {
  on: boolean;
  toggle: () => void;
}

interface ToggleProps {
  children: JSX.Element | JSX.Element[];
}

interface ToggleButtonProps {
  children: JSX.Element | JSX.Element[] | string;
}

const initialState = { on: false, toggle: () => {} };
const ToggleContext = createContext<ToggleContextProps>(initialState);

function Toggle({ children }: ToggleProps) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

Toggle.On = function ToggleOn({ children }: { children: JSX.Element }) {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
};

Toggle.Off = function ToggleOff({ children }: { children: JSX.Element }) {
  const { on } = useContext(ToggleContext);
  return on ? null : children;
};

Toggle.Button = function ToggleButton(props: ToggleButtonProps) {
  const { on, toggle } = useContext(ToggleContext);

  return (
    <button onClick={toggle}>
      {props.children} - {on ? "OFF" : "ON"}
    </button>
  );
};

export default function CompoundComponent() {
  return (
    <Toggle>
      <Toggle.On>
        <h1>The light is on</h1>
      </Toggle.On>
      <Toggle.Off>
        <h1>The light is off</h1>
      </Toggle.Off>
      <Toggle.Button>
        <span>Toggle</span>
      </Toggle.Button>
    </Toggle>
  );
}
