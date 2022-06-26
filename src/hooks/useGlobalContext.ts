import { useContext } from "react";
import AppContext from "../../components/AppContext";

const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;
