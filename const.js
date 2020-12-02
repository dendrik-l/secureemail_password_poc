const INITIAL_STATE = "initial state";
const EMAIL_SUBMITTED = "email submitted";
const OTP_SUBMITTED = "otp submitted";
const SHOW_PASSWORD = "show password";

const header_initial_state = "You've received an encrypted email."

export const STATE = {INITIAL_STATE, EMAIL_SUBMITTED, OTP_SUBMITTED, SHOW_PASSWORD};

export const DefinedStates = new Set([INITIAL_STATE, EMAIL_SUBMITTED, OTP_SUBMITTED, SHOW_PASSWORD]);