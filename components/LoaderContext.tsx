"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface LoaderContextType {
  loaderComplete: boolean;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function LoaderProvider({ children }: { children: ReactNode }) {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <LoaderContext.Provider value={{ loaderComplete }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within LoaderProvider");
  }
  return context;
}
