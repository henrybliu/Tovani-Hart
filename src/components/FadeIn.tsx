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
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    // Use requestAnimationFrame to minimize layout thrashing
    const createObserver = () => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Use requestAnimationFrame to reduce performance impact
              requestAnimationFrame(() => {
                setIsVisible(true);
                // Disconnect after first intersection
                observerRef.current?.unobserve(entry.target);
              });
            }
          });
        },
        {
          threshold: threshold,
          rootMargin: "0px",
        }
      );

      if (currentElement) {
        observerRef.current.observe(currentElement);
      }
    };

    // Defer observer creation to next event loop
    const timeoutId = setTimeout(createObserver, delay);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current && currentElement) {
        observerRef.current.unobserve(currentElement);
        observerRef.current.disconnect();
      }
    };
  }, [delay, threshold]);

  return (
    <FadeInContainer
      ref={elementRef}
      $slideIn={slideIn}
      $isVisible={isVisible}
      $delay={delay}
      style={style}
    >
      {children}
    </FadeInContainer>
  );
};

const FadeInContainer = styled("div")<{
  $slideIn: boolean;
  $isVisible: boolean;
  $delay: number;
}>(({ $slideIn, $isVisible, $delay }) => ({
  opacity: 0,
  transform: $slideIn ? "translateY(50px)" : "none",
  transition: `
    opacity 900ms ease-in-out ${$delay}ms, 
    transform 400ms ease-in-out ${$delay}ms
  `,
  willChange: "opacity, transform",

  ...($isVisible && {
    opacity: 1,
    transform: "none",
  }),
}));

export default FadeIn;
