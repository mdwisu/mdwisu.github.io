/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import ConstructionModal from "@/components/ContructionModal";
import AboutSection from "@/components/AboutSection";
import MainSection from "@/components/MainSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

// Pindahkan import dan inisialisasi Locomotive ke dalam useEffect
declare global {
  interface Window {
    locomotive?: any; // Tambahkan ? untuk menandai sebagai opsional
  }
}

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const locomotiveScrollRef = useRef<any>(null);

  useEffect(() => {
    // Import Locomotive Scroll hanya di client side
    const initLocomotiveScroll = async () => {
      const locomotiveModule = await import("locomotive-scroll");
      const LocomotiveScroll = locomotiveModule.default;

      if (scrollContainerRef.current && !locomotiveScrollRef.current) {
        locomotiveScrollRef.current = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          multiplier: 1,
          lerp: 0.07,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
            breakpoint: 1024,
          },
        });

        // Assign ke window untuk progress bar jika diperlukan
        window.locomotive = locomotiveScrollRef.current;
      }
    };

    // Inisialisasi hanya di client side
    if (typeof window !== "undefined") {
      initLocomotiveScroll();
    }

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
        delete window.locomotive;
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (locomotiveScrollRef.current) {
      const target = document.getElementById(id);
      if (target) {
        locomotiveScrollRef.current.scrollTo(target, {
          offset: 0,
          duration: 1000,
          easing: [0.25, 0.0, 0.35, 1.0],
        });
      }
    }
  };

  return (
    <div>
      <ConstructionModal />
      <div data-scroll-container ref={scrollContainerRef}>
        <div data-scroll-section>
          <Navbar scrollToSection={scrollToSection} />
          <MainSection />
        </div>
        <div data-scroll-section id="projects">
          <ProjectSection />
        </div>
        <div data-scroll-section id="about">
          <AboutSection />
        </div>
        <div data-scroll-section id="contact">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
