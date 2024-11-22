"use client"; // Penting agar locomotive scroll berfungsi di Next.js 13+
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function LocomotiveScrollPage() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true, // Aktifkan efek scroll yang halus
        multiplier: 1.2, // Kecepatan scroll
      });

      // Cleanup locomotive scroll saat komponen di-unmount
      return () => {
        locomotiveScroll.destroy();
      };
    }
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
