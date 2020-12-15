import { Typography } from "@material-ui/core";
import { useContext } from "react";
import { AppStateContext } from "../pages/index";
import { InstructionContent, STATE } from "../const";

export default function InformationalInstruction({email = null}) {
  const appState = useContext(AppStateContext);
  let contentToShow;
  if (appState == STATE.EMAIL_SUBMITTED) {
    contentToShow = InstructionContent[appState](email);
  } else{
    contentToShow = InstructionContent[appState]();
  }
  return (
    <Typography variant="body1">
      {contentToShow}
    </Typography>
  );
}
