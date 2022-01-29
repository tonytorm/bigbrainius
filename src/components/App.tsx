import * as React from "react";
import "./styles.css";
import Header from "./Header";
import FirstBody from "./FirstBody";
import SmallHeader from "./SmallHeader";
import OtherBody from "./OtherBody";

export default function App() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col">
        <Header />
        <SmallHeader />
      </div>
      <div className="flex flex-row">
        <OtherBody />
        <FirstBody />
      </div>
      <div className="w-screen"></div>
    </div>
  );
}
