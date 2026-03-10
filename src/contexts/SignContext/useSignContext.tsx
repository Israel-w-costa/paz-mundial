import { useContext } from "react";
import { SingContext } from "./SignContext";

export function useSignContext() {
  return useContext(SingContext);
}
