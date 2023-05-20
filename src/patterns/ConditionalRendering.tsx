
interface IConditionalRenderingProps {
  isTrue: boolean;
};

function ConditionalRenderingOne({ isTrue }: IConditionalRenderingProps) {

  return (
    <>
      {isTrue && <div>Render is true</div>}
      {!isTrue && <div>Render is false</div>}
    </>
  );

};

function ConditionalRenderingTwo({ isTrue }: IConditionalRenderingProps) {

  return (
    <>
      {
        isTrue
          ? <div>Render is true</div>
          : <div>Render is false</div>}
    </>
  );

};

function ConditionalRenderingThree({ isTrue }: IConditionalRenderingProps) {

  if (isTrue) {
    return <div>Render is true</div>;
  }

  return <div>Render is false</div>;

};

function ConditionalRenderingFour({ isTrue }: IConditionalRenderingProps) {

  switch (isTrue) {
    case true:
      return <div>Render is true</div>;
    case false:
      return <div>Render is false</div>;
    default:
      return <div>Render is default</div>;
  }

};

export default function ConditionalRendering() {

  return (
    <>
      <ConditionalRenderingOne isTrue={true} />
      <ConditionalRenderingTwo isTrue={true} />
      <ConditionalRenderingThree isTrue={true} />
      <ConditionalRenderingFour isTrue={true} />
    </>
  );

};
