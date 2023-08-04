import { createContext, useContext, useState } from "react";
import React from 'react';

interface TempImagesContext {
  setTempImages: React.Dispatch<React.SetStateAction<any[]>>;
  tempImages: any[];
}

const tempImagesContext = createContext<TempImagesContext>({
  tempImages: [],
  setTempImages: () => {}
});

const TempImagesProvider = ({ children }: { children: React.ReactNode }) => {
  const [tempImages, setTempImages] = useState<any[]>([]);

  return (
    <tempImagesContext.Provider value={{ tempImages, setTempImages }}>
      {children}
    </tempImagesContext.Provider>
  );
};

export const UseTempImageContext = () => useContext(tempImagesContext);

export default TempImagesProvider;







