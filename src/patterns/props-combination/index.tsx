interface ComponentProps {
  propA: string;
  propB: string;
}

interface AdditionalProps {
  propC: string;
  propD: string;
}

function Component(props: ComponentProps & AdditionalProps) {
  const { propA, propB, propC, propD } = props;
  return (
    <div>
      <p>{propA}</p>
      <p>{propB}</p>
      <p>{propC}</p>
      <p>{propD}</p>
    </div>
  );
}

export default function PropsCombination() {
  const additionalProps = {
    propC: "propC",
    propD: "propD",
  };

  return <Component propA="propA" propB="propB" {...additionalProps} />;
}
