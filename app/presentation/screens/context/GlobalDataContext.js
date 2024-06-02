import React, { createContext, useState } from "react";

export const GlobalDataContext = createContext();

export const GlobalDataProvider = ({ children }) => {
  const [projetos, setProjetos] = useState([]);
  const [projetoIdCounter, setProjetoIdCounter] = useState(0);

  return (
    <GlobalDataContext.Provider value={{ projetos, setProjetos, projetoIdCounter, setProjetoIdCounter }}>
      {children}
    </GlobalDataContext.Provider>
  );
};
