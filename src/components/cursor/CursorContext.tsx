"use client";

import { createContext, ReactNode, useContext, useState } from "react";

// Definisikan tipe cursor
type CursorType = "default" | "hover" | "pointer" | "custom";

interface CursorContextProps {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
}

// Buat Context
const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorType, setCursorType] = useState<CursorType>("default");

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
};

// Custom hook untuk menggunakan Cursor Context
export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor harus digunakan di dalam CursorProvider");
  }
  return context;
};
