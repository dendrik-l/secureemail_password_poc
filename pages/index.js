import { useRouter } from "next/router";
import { useState } from "react";
import SingleInputForm from "../components/SingleInputForm";

const INITIAL_STATE = "initial state";
const EMAIL_SUBMITTED = "email submitted";
const OTP_SUBMITTED = "otp submitted";
const SHOW_PASSWORD = "show password";

export default function Home() {
  const router = useRouter();
  const targetId = router.query.id;
  const [state, setState] = useState(INITIAL_STATE);
  const [token, setToken] = useState();
  const [password, setPassword] = useState();

  function handleEmailSubmit(emailInput) {
    //console.log(JSON.stringify({ uuid: targetId, email: emailInput }));

    fetch(process.env.NEXT_PUBLIC_API_ROUTE + "api/otp/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uuid: targetId, email: emailInput }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not okay");
        }
        return res.json();
      })
      .then((body) => {
        setToken(body.access_token);
        setState(EMAIL_SUBMITTED);
      })
      .catch((e) => console.log(e));
  }

  function handleOtpSubmit(otpInput) {
    //console.log(otpInput);
    otpInput = parseInt(otpInput);

    fetch(process.env.NEXT_PUBLIC_API_ROUTE + "api/otp/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ otp: otpInput }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not okay");
        }
        return res.json();
      })
      .then((body) => {
        setPassword(body.pwd);
        setState(SHOW_PASSWORD);
      })
      .catch((e) => console.log(e));
  }

  var childToRender;

  switch (state) {
    case INITIAL_STATE:
      childToRender = (
        <SingleInputForm
          label="Your email: "
          inputType="email"
          inputPlaceholder="joe@gmail.com"
          onSubmit={handleEmailSubmit}
        ></SingleInputForm>
      );
      break;
    case EMAIL_SUBMITTED:
      childToRender = (
        <SingleInputForm
          label="OTP: "
          inputType="text"
          inputPlaceholder="111111"
          onSubmit={handleOtpSubmit}
        ></SingleInputForm>
      );
      break;
    case OTP_SUBMITTED:
      childToRender = <div>{OTP_SUBMITTED}</div>;
      break;
    case SHOW_PASSWORD:
      childToRender = <div>Password: {password}</div>;
      break;
    default:
      console.log("Invalid state");
  }

  return (
    <div>
      <p>Hi!</p>
      {childToRender}
    </div>
  );
}
