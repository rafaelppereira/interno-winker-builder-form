import { useContext } from "react";
import { JsonContext } from "../contexts/JsonContext";

export function useGenerate() {
  const value = useContext(JsonContext);
  return value;
}
