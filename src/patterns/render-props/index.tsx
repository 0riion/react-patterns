import { useState } from "react";

interface ComponentProps {
  render: () => JSX.Element;
}

function Component(props: ComponentProps) {
  return <div>{props.render()}</div>;
}

export default function RenderProps() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <Component
      render={() => {
        return (
          <div>
            <button onClick={() => setIsUserLoggedIn(!isUserLoggedIn)}>
              {isUserLoggedIn ? "Log out" : "Log in"}
            </button>
            {isUserLoggedIn && <p>Welcome back, user!</p>}
          </div>
        );
      }}
    />
  );
}
