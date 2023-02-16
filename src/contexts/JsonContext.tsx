import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import lz from "lzutf8";

interface JsonContextData {
  openJSONText: boolean;
  jsonText: string;
  setJsonText: Dispatch<string>;
  setOpenJSONText: Dispatch<boolean>;
  setJsonLoad: Dispatch<string>;
  jsonLoad: string;
  setJsonTextBackup: Dispatch<string>;
  jsonTextBackup: string;
}

interface JsonProviderProps {
  children: ReactNode;
}

export const JsonContext = createContext({} as JsonContextData);

export function JsonProvider({ children }: JsonProviderProps) {
  const [openJSONText, setOpenJSONText] = useState(false);

  const [jsonText, setJsonText] = useState("");
  const [jsonLoad, setJsonLoad] = useState("");
  const [jsonTextBackup, setJsonTextBackup] = useState("");

  useEffect(() => {
    const json = lz.decompress(lz.decodeBase64(jsonText));
    setJsonLoad(json);
  }, [jsonText]);

  return (
    <JsonContext.Provider
      value={{
        openJSONText,
        jsonText,
        setJsonText,
        setOpenJSONText,
        setJsonLoad,
        jsonLoad,
        setJsonTextBackup,
        jsonTextBackup,
      }}
    >
      {children}
    </JsonContext.Provider>
  );
}
