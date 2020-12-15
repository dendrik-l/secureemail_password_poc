import KnownEmailStore from "./KnownEmailStore";
import ApplicationStateStore from "./ApplicationStateStore";

const isServer = typeof window === "undefined";

export function initializeStore() {
  if (isServer) {
    return {
      KnownEmailStore: new KnownEmailStore(),
      ApplicationStateStore: new ApplicationStateStore(),
    };
  }

  let savedEmailsSerialised = localStorage.getItem("savedEmails");
  if (!savedEmailsSerialised) {
    localStorage.setItem("savedEmails", "[]");
    savedEmailsSerialised = "[]";
  }
  return {
    KnownEmailStore: new KnownEmailStore(JSON.parse(savedEmailsSerialised)),
    ApplicationStateStore: new ApplicationStateStore(),
  };
}
