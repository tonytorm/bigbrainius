import * as React from "react";
import Button from "./Button";
import DropDownMenu from "./DropDownMenu";

const SmallHeader = () => {
  return (
    <div className=" shadow-md h-8 w-max bg-gray-100 flex flex-col px-8">
      <Button overlayObject={<DropDownMenu />} text="Projects"></Button>
    </div>
  );
};

export default SmallHeader;
