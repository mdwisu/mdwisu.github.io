/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Penting agar locomotive scroll berfungsi di Next.js 13+
import React, { useEffect, useRef } from "react";

import "locomotive-scroll/dist/locomotive-scroll.css";

export default function LocomotiveScrollPage() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let locomotiveScroll: any;

    if (scrollContainerRef.current) {
      // Import LocomotiveScroll hanya di sisi klien
      import("locomotive-scroll").then((LocomotiveScroll) => {
        locomotiveScroll = new LocomotiveScroll.default({
          el: scrollContainerRef.current as HTMLElement,
          smooth: true,
          multiplier: 1,
        });
      });
    }

    // Cleanup instance saat komponen dilepas
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-section ref={scrollContainerRef}>
      {/* Section 1 */}
      <section
        data-scroll-section
        className="min-h-screen bg-gray-800 text-white flex items-center justify-center"
      >
        <h1 data-scroll data-scroll-speed="3" className="text-6xl font-bold">
          Welcome to Locomotive Scroll
        </h1>
      </section>

      {/* Section 2 */}
      <section
        data-scroll-section
        className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center"
      >
        <p
          data-scroll
          data-scroll-speed="-2"
          className="text-4xl font-semibold"
        >
          Smooth scrolling made easy 🚀
        </p>
      </section>

      {/* Section 3 */}
      <section
        data-scroll-section
        className="min-h-screen bg-blue-500 text-white flex items-center justify-center"
      >
        <p data-scroll data-scroll-speed="1" className="text-5xl font-bold">
          Enjoy the Parallax Effect 🎉
        </p>
      </section>
    </div>
  );
}
