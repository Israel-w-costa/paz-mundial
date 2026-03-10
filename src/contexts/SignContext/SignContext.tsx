import { createContext } from "react";
import type { SignedModel } from "../../models/SignedModel";

type SignedContextProps = {
  state: SignedModel[];
  setState: React.Dispatch<React.SetStateAction<SignedModel[]>>;
};

export const SingContext = createContext<SignedContextProps>({
  state: [],
  setState: () => {},
});
