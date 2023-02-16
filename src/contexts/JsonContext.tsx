import { createContext, Dispatch, ReactNode, useState } from "react";

interface JsonContextData {
  openJSONText: boolean;
  jsonText: string;
  setJsonText: Dispatch<string>;
  setOpenJSONText: Dispatch<boolean>;
}

interface JsonProviderProps {
  children: ReactNode;
}

export const JsonContext = createContext({} as JsonContextData);

export function JsonProvider({ children }: JsonProviderProps) {
  const [openJSONText, setOpenJSONText] = useState(false);
  const [jsonText, setJsonText] = useState("");

  return (
    <JsonContext.Provider
      value={{
        openJSONText,
        jsonText,
        setJsonText,
        setOpenJSONText,
      }}
    >
      {children}
    </JsonContext.Provider>
  );
}
