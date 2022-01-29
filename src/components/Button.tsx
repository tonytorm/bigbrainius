import * as React from "react";
import { useState } from "react";

const Button = ({ text, overlayObject }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      style={{ backgroundColor: "#4287f5" }}
      className=" ml-auto w-20 h-8  text-xs hover:bg-blue-800 hover:text-white"
      onClick={() => setOpen(!open)}
    >
      {text}

      {open && overlayObject}
    </button>
  );
};

export default Button;
