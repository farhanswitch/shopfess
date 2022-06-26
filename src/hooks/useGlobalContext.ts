import { useContext } from "react";
import AppContext from "../utilities/AppContext";

const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;
