import React, { useContext, createContext } from "react";
import useStateContext from "./useStateContext";

const MainContext = createContext();

const ManageContext = ({ children }) => {
  const { state, dispatch } = useStateContext();

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export default ManageContext;

export const useManageContext = () => useContext(MainContext);
