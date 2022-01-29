import * as React from "react";
import { Bluetooth } from "react-feather";

const DropDownMenu = () => {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#4287f5",
        width: "200px",
        height: "300px",
        top: "4.25rem",
        borderRadius: "5px",
        padding: "1rem",
        right: "2vw",
        overflow: "hidden",
        zIndex: 20,
        opacity: 0.9,
        border: "solid blue 1px"
      }}
    ></div>
  );
};

export default DropDownMenu;
