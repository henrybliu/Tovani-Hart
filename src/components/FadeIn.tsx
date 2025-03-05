import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/system";

type FadeInProps = {
  children: React.ReactNode;
  slideIn?: boolean;
  delay?: number;
  threshold?: number;
  style?: React.CSSProperties;
};

const FadeIn = ({
  children,
  slideIn = true,
  delay = 0,
  threshold = 0.0,
  style,
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = domRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeoutId = setTimeout(() => {
              setIsVisible(true);
            }, delay);

            return () => clearTimeout(timeoutId);
          }
        });
      },
      {
        threshold: threshold, // Configurable threshold
        rootMargin: "0px 0px 100px 0px", // Slight offset to trigger earlier
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  return (
    <FadeInContainer
      slideIn={slideIn}
      isVisible={isVisible}
      delay={delay}
      ref={domRef}
      style={{ ...style }}
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
    transition: `
      opacity 900ms ease-in-out ${delay}ms, 
      transform 400ms ease-in-out ${delay}ms
    `,
    willChange: "opacity, transform",

    ...(isVisible && {
      opacity: 1,
      transform: "none",
    }),
  })
);

export default FadeIn;
