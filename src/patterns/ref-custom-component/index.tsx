import { forwardRef, useEffect, useRef } from "react";

const CustomInput = forwardRef<HTMLInputElement>((props, ref) => (
  <input type="text" {...props} ref={ref} />
));

export default function RefCustomComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // INFO: focus the input element on mount
    inputRef.current?.focus();
    // INFO: add event listener to the input element, clicked print to console
    inputRef.current?.addEventListener("click", () => {
      console.log("clicked");
    });
  }, []);

  return <CustomInput ref={inputRef} />;
}
