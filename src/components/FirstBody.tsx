import * as React from "react";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import webServerAnimation from "../../public/resources/webServer.json";

const FirstBody = () => {
  const options = {
    animationData: webServerAnimation,
    loop: true,
    autoplay: true
  };

  const { View } = useLottie(options);

  return (
    <div className="shadow-sm bg-blue-100 h-full">
      <>{View}</>
    </div>
  );
};
export default FirstBody;
