import { useReducer } from "react";
import { AuthReducer, initialState } from "./reducer";

const useStateContext = () => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return { state, dispatch };
};

export default useStateContext;
