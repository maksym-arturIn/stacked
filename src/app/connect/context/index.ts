import { createContext, Dispatch, SetStateAction, useContext } from "react";

type ConnectState = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;

  activeId: string | null;
  setActiveId: Dispatch<SetStateAction<string | null>>;
};

export const ConnectContext = createContext<ConnectState>({
  step: 0,
  setStep: () => {},
  activeId: null,
  setActiveId: () => {},
});

export const useConnectState = () => useContext(ConnectContext);
