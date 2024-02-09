import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";

const UploadContext = createContext();

export const useUploadContext = () => {
  return useContext(UploadContext);
};

export const UploadProvider = ({ children }) => {
  const [refetch, setRefetch] = useState(null);
 

  const contextValue = {
      refetch,
      setRefetch
  };

  return (
    <UploadContext.Provider value={contextValue}>
      {children}
    </UploadContext.Provider>
  );
};
