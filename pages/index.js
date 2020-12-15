import { useRouter } from "next/router";
import { useState, createContext } from "react";
import { requestWithEmail, requestWithOtp } from "../api/api";

import { STATE } from "../const";
import InformationalHeader from "../components/InformationalHeader";
import InformationalInstruction from "../components/InformationalInstruction";
import EmailInputForm from "../components/EmailInputForm";
import OtpInputForm from "../components/OtpInputForm";
import PasswordDisplay from "../components/PasswordDisplay";
import { Container, Grid } from "@material-ui/core";

export const AppStateContext = createContext(STATE.INITIAL_STATE);

export default function Index({ savedEmails }) {
  const router = useRouter();
  const targetId = router.query.id;
  const [token, setToken] = useState();
  const [appState, setAppState] = useState(STATE.INITIAL_STATE);
  const [unverifiedEmail, setUnverifiedEmail] = useState();
  const [password, setPassword] = useState();

  async function handleEmailSubmit(emailInput) {
    let response = await requestWithEmail(targetId, emailInput);
    if (response.status == "ok") {
      console.log(response);
      setAppState(STATE.EMAIL_SUBMITTED);
      setToken(response.body.access_token);
      setUnverifiedEmail(emailInput);
    } else {
      console.log(response.body);
    }
  }

  async function handleOtpSubmit(otpInput) {
    otpInput = parseInt(otpInput);
    let response = await requestWithOtp(token, otpInput);
    if (response.status == "ok") {
      console.log(response);
      setAppState(STATE.SHOW_PASSWORD);
      setPassword(response.body.pwd);
      updateSavedEmails();
    } else {
      console.log(response.body);
    }
  }

  function updateSavedEmails() {
    localStorage.setItem(
      "savedEmails",
      JSON.stringify(Array.from(new Set([...savedEmails, unverifiedEmail])))
    );
  }

  return (
    <Container style={{margin: 200}} >
      <Grid container direction='column' alignItems='center' >
        <AppStateContext.Provider value={appState}>
          <Grid item>
            <InformationalHeader />
          </Grid>
          <Grid item>
            <InformationalInstruction email={unverifiedEmail} />
          </Grid>
        </AppStateContext.Provider>
        <Grid item>
          {appState == STATE.INITIAL_STATE ? (
            <EmailInputForm
              onSubmit={handleEmailSubmit}
              savedEmails={savedEmails}
            />
          ) : appState == STATE.EMAIL_SUBMITTED ? (
            <OtpInputForm onSubmit={handleOtpSubmit} />
          ) : appState == STATE.SHOW_PASSWORD ? (
            <PasswordDisplay password={password} />
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
}
