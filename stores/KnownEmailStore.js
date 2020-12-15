import { makeAutoObservable } from "mobx";

class KnownEmailStore {
  knownEmails = [];

  constructor(initialData = []) {
    makeAutoObservable(this);
    this.knownEmails = initialData.sort();
  }

  clearKnownEmails() {
    this.knownEmails = [];
  }
}

export default KnownEmailStore;
