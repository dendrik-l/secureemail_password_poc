const INITIAL_STATE = "initial state";
const EMAIL_SUBMITTED = "email submitted";
const OTP_SUBMITTED = "otp submitted";
const SHOW_PASSWORD = "show password";

export const HeaderContent = {
  [INITIAL_STATE]: () =>
    "You've received an encrypted email protected by SecureEmail",
  [EMAIL_SUBMITTED]: () =>
    "You've received an encrypted email protected by SecureEmail",
  [OTP_SUBMITTED]: () =>
    "You've received an encrypted email protected by SecureEmail",
  [SHOW_PASSWORD]: () =>
    "You've received an encrypted email protected by SecureEmail",
};

export const InstructionContent = {
  [INITIAL_STATE]: () =>
    "Enter the email address for which you've received this email.",
  [EMAIL_SUBMITTED]: (email) => `An OTP has been sent to ${email}.`,
  [OTP_SUBMITTED]: () => "Empty.",
  [SHOW_PASSWORD]: () =>
    "Use the following password to open your encrypted pdf.",
};

export const STATE = {
  INITIAL_STATE,
  EMAIL_SUBMITTED,
  OTP_SUBMITTED,
  SHOW_PASSWORD,
};

export const DefinedStates = new Set([
  INITIAL_STATE,
  EMAIL_SUBMITTED,
  OTP_SUBMITTED,
  SHOW_PASSWORD,
]);
