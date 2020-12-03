import { Typography } from "@material-ui/core";
import { useContext } from "react";
import { AppStateContext } from "../pages/index";
import { HeaderContent } from "../const";

export default function InformationalHeader() {
  const appState = useContext(AppStateContext);
  let contentToShow = HeaderContent[appState]();
  return <Typography variant="h6">{contentToShow}</Typography>;
}
