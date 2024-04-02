import { useState } from "react";

export default function ConditionalRender() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsUserLoggedIn(!isUserLoggedIn)}>
        {isUserLoggedIn ? "Log out" : "Log in"}
      </button>
      {isUserLoggedIn && <p>Welcome back, user!</p>}
    </div>
  );
}
