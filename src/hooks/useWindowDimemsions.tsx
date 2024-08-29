import React from "react";
import { useEffect, useState } from "react";

function useWindowDimemsions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;

  //   return (
  //     <div>useWindowDimemsions</div>
  //   )
}

export default useWindowDimemsions;
