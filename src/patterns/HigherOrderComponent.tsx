
import React from "react";

interface Props {
  name: string;
  date: Date;
};

function HigherOrderComponent(props: Props) {
  return (
    <div>
      <h1>Higher Order Component</h1>
      <p>Props: {props.name}</p>
      <p>Date: {props.date.toISOString()}</p>
    </div>
  );
};

const WithProps = (Component: React.ComponentType<Props>) => {
  return () => {

    const props = {
      name: "Higher Order Component",
      date: new Date(),
    };

    return <Component {...props} />;

  };
};

export default WithProps(HigherOrderComponent);
