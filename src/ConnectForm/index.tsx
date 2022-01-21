import React from "react";
import "./index.scss";
import { useFormContext } from "react-hook-form";
export default function ConnectForm({ children }) {
  const methods = useFormContext();
  return children({ ...methods });
}
