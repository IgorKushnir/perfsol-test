/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { createContext, useState } from "react";

type Context = {
  isContactModalOpened: boolean;
  setIsContactModalOpened: (condition: any) => void;
};
const defaultContext: Context = {
  isContactModalOpened: false,
  setIsContactModalOpened: (condition) => {
    console.log(condition);
  },
};

export const AppContext = createContext<Context>(defaultContext);

export const ApplicationContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isContactModalOpened, setIsContactModalOpened] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isContactModalOpened,
        setIsContactModalOpened,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
