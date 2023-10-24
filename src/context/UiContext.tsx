"use client";

import { useState, createContext } from "react";

export const UiContext = createContext<any>(null);

export const UiCtxProvider = ({ children }: { children: JSX.Element }) => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const toggleAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu);
  };

  return (
    <UiContext.Provider value={{ showAccountMenu, toggleAccountMenu }}>
      {children}
    </UiContext.Provider>
  );
};
