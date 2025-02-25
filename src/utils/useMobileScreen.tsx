import { useState, useEffect } from "react";
import { MOBILE_NAVBAR_SCREEN_WIDTH } from "../assets/Spacing";

const mobileWindowWidth = MOBILE_NAVBAR_SCREEN_WIDTH;

const useMobileScreen = () => {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(
    window.innerWidth <= mobileWindowWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= mobileWindowWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileScreen;
};

export default useMobileScreen;
