import { makeAutoObservable } from "mobx";
import { STATE, DefinedStates } from "../const";

class ApplicationStateStore {
  currentState = STATE.INITIAL_STATE;
  
  constructor() {
    makeAutoObservable(this);
  }

  setApplicationState(state) {
    if (!DefinedStates.has(state)) {
      console.log("Setting to an undefined state");
    }
    this.currentState = state;
  }
}

export default ApplicationStateStore;
