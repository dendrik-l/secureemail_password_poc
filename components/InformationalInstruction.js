import { Typography } from "@material-ui/core";
import { useContext } from "react";
import { AppStateContext } from "../pages/index";

export default function InformationalInstruction() {
  const appState = useContext(AppStateContext);
  return (
    <Typography variant="body1">
      App state in instruction = {appState}
    </Typography>
  );
}
