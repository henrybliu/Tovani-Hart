import React, { useEffect, useState, useCallback } from "react";

type ParallaxImageProps = {
  imageName: string;
  style?: React.CSSProperties;
};

const ParallaxImage = ({ imageName, style }: ParallaxImageProps) => {
  const backgroundImage = require(`../assets/images/${imageName}`);
  const [scrollPosition, setScrollPosition] = useState(0);

  const debounce = (func: Function, wait: number) => {
    let timeoutId: NodeJS.Timeout;

    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  };

  const updateScrollPosition = useCallback(() => {
    requestAnimationFrame(() => {
      setScrollPosition(window.scrollY);
    });
  }, []);

  useEffect(() => {
    const handleScroll = debounce(updateScrollPosition, 5);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateScrollPosition]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundPosition: `center ${scrollPosition * 0.5}px`,
        height: "105vh",
        position: "relative",
        width: "100%",
        zIndex: -1,
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
        WebkitOverflowScrolling: "touch",
        ...style,
      }}
    />
  );
};

export default ParallaxImage;
