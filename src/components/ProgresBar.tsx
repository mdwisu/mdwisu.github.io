/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import { motion, useScroll } from "framer-motion";

// export default function ProgresBar() {
//   const { scrollYProgress } = useScroll();
//   return (
//     <>
//       {/* Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left"
//         style={{ scaleX: scrollYProgress }}
//       />
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scaleX = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Mendapatkan elemen container Locomotive Scroll
    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (!scrollContainer) return;

    // Fungsi untuk menghitung progress
    const updateProgress = () => {
      const totalHeight = scrollContainer.scrollHeight - window.innerHeight;
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      const progress = currentScroll / totalHeight;
      setScrollProgress(progress);
    };

    // Subscribe ke event scroll dari Locomotive
    if (typeof window !== "undefined") {
      const locomotive = (window as any).locomotive;
      if (locomotive) {
        locomotive.on("scroll", (args: any) => {
          const { scroll } = args;
          const progress = scroll.y / scroll.limit.y;
          setScrollProgress(progress);
        });
      }
    }

    // Fallback ke native scroll untuk development
    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      // Cleanup Locomotive scroll listener jika ada
      if (typeof window !== "undefined") {
        const locomotive = (window as any).locomotive;
        if (locomotive) {
          locomotive.off("scroll");
        }
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
}
