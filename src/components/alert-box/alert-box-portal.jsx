"use client";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AlertBox from "./alert-box";
import { AlertContext } from "@/contexts/alert-context";

const AlertBoxPortal = () => {
  const { alertObjState, dispatchAction } = useContext(AlertContext);
  const alertArr = Object.values(alertObjState);
  const filteredArr = alertArr.filter((elem) => elem.isDisp === true);

  const [portalNode, setPortalNode] = useState(null);

  useEffect(() => {
    setPortalNode(document.body);
  }, []);

  if (!portalNode) return null;

  return createPortal(
    <AlertBox arr={alertArr} filteredArr={filteredArr} />,
    portalNode
  );
};

export default AlertBoxPortal;
