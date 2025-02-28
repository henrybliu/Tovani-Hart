import React, { useEffect, useState, useRef } from "react";

type ParallaxImageProps = {
  imageName: string;
  style?: React.CSSProperties;
  speed?: number;
};

const ParallaxImage = ({
  imageName,
  style,
  speed = 0.55,
}: ParallaxImageProps) => {
  const backgroundImage = require(`../assets/images/${imageName}`);
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const calculateOffset = () => {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const elementTop = rect.top + scrollTop;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      const windowCenter = scrollTop + windowHeight / 2;
      const elementCenter = elementTop + elementHeight / 2;
      const distanceFromCenter = elementCenter - windowCenter;

      setOffset(-distanceFromCenter * speed);
    };

    calculateOffset();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateOffset();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", calculateOffset);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calculateOffset);
    };
  }, [speed]);

  return (
    <div
      ref={elementRef}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `center ${offset}px`,
        height: "100%",
        position: "absolute",
        width: "100%",
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
        WebkitOverflowScrolling: "touch",
        ...style,
      }}
    />
  );
};

export default ParallaxImage;
