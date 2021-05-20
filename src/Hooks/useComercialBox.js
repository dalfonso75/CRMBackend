import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import comercialService from "../services/comercial";

export default function useComercialGet() {
  const { user, setUser } = useContext(Context);
  const [stateComercial, setStateComercia] = useState({ loadingComercial: false, errorComercial: null, dataComercial: null});
  const getComercial = useCallback(
    () => {
      setStateComercia({ loadingComercial: true, errorComercial: null });
      comercialService.getComercial(( user ? user.sign : ''))
        .then((data) => {
          setStateComercia({ loadingComercial: false, errorComercial: null, dataComercial: data.body });
        })
        .catch((err) => {
          console.log(err);
          setStateComercia({ loadingComercial: false, errorComercial: err, dataComercial: null });
        });
    },
    [setUser]
  );
  return {
    isLoadingComercial: stateComercial.loadingComercial,
    hasErrorComercial: stateComercial.errorComercial,
    dataComercial: stateComercial.dataComercial,
    getComercial,
  };
}
