import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/system";

type FadeInProps = {
  children: React.ReactNode;
  slideIn?: boolean;
  delay?: number;
};

const FadeIn = ({ children, slideIn = true, delay = 0 }: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timeoutId = setTimeout(() => {
            setIsVisible(true);
            observer.disconnect();
          }, delay);

          return () => clearTimeout(timeoutId);
        }
      },
      {
        threshold: 0.0,
      }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <FadeInContainer
      slideIn={slideIn}
      isVisible={isVisible}
      delay={delay}
      ref={domRef}
    >
      {children}
    </FadeInContainer>
  );
};

type FadeInContainerProps = {
  slideIn: boolean;
  isVisible: boolean;
  delay: number;
};

const FadeInContainer = styled("div")(
  ({ slideIn, isVisible, delay }: FadeInContainerProps) => ({
    opacity: 0,
    transform: slideIn ? "translateY(20vh)" : "none",
    visibility: "hidden",
    transition: `
    opacity 900ms ease-out ${delay}ms, 
    transform 400ms ease-out ${delay}ms, 
    visibility 900ms ease-out ${delay}ms
  `,
    willChange: "opacity, transform, visibility",

    ...(isVisible && {
      opacity: 1,
      transform: "none",
      visibility: "visible",
    }),
  })
);

export default FadeIn;
