import { useState } from "react";
import { SingContext } from "./SignContext";
import type { SignedModel } from "../../models/SignedModel";

type SignContextProviderProps = {
  children: React.ReactNode;
};

export function SignContextProvider({ children }: SignContextProviderProps) {
  const [state, setState] = useState<SignedModel[]>([]);

  return (
    <SingContext.Provider value={{ state, setState }}>
      {children}
    </SingContext.Provider>
  );
}
