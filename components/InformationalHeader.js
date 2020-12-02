import { Typography } from "@material-ui/core";
import { useContext } from "react";
import { AppStateContext } from "../pages/index";

export default function InformationalHeader() {
  const appState = useContext(AppStateContext);
  return <Typography variant="h6">App state in header = {appState}</Typography>;
}
