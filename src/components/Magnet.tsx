"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
// components/Magnet.tsx
import { useEffect, useRef } from "react";
import { Power4, TweenMax } from "gsap";

type Props = React.HTMLProps<HTMLDivElement> & {
  children: React.ReactNode;
  strength?: number;
  layers?: string;
};

const Magnet = ({ children, strength = 50, layers, ...props }: Props) => {
  const currentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveMagnet = (event: MouseEvent, strength: number) => {
      if (currentRef.current) {
        const rect = currentRef.current.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) / strength;
        const y = (event.clientY - rect.top - rect.height / 2) / strength;

        TweenMax.to(currentRef.current, 1, { x, y, ease: Power4.easeOut });
      }
    };

    // Apply to layers if specified
    if (layers) {
      const layerElements = currentRef.current?.querySelectorAll(`.${layers}`);
      if (layerElements?.length) {
        layerElements.forEach((layer, i) => {
          layer.addEventListener("mousemove", (layerEvent: any) => {
            moveMagnet(layerEvent, strength - (i + 30));
          });
        });
      }

      if (layerElements?.length) {
        layerElements.forEach((layer) => {
          layer.addEventListener("mouseout", (layerEvent) => {
            TweenMax.to(layerEvent.currentTarget, 1, {
              x: 0,
              y: 0,
              ease: Power4.easeOut,
            });
          });
        });
      }
    }

    // Apply to the main element
    if (currentRef.current) {
      currentRef.current.addEventListener("mousemove", (e) => {
        moveMagnet(e, strength);
      });

      currentRef.current.addEventListener("mouseout", (event) => {
        TweenMax.to(event.currentTarget, 1, {
          x: 0,
          y: 0,
          ease: Power4.easeOut,
        });
      });
    }

    // Cleanup event listeners
    return () => {
      if (currentRef.current) {
        currentRef.current.removeEventListener("mousemove", (e) => {
          moveMagnet(e, strength);
        });
        currentRef.current.removeEventListener("mouseout", (event) => {
          TweenMax.to(event.currentTarget, 1, {
            x: 0,
            y: 0,
            ease: Power4.easeOut,
          });
        });
      }
    };
  }, [strength, layers]);

  return (
    <div ref={currentRef} {...props}>
      {children}
    </div>
  );
};

export default Magnet;
