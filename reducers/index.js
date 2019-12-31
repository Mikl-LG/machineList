import { combineReducers } from "redux";
//import MachineList from "./machineList";

const rootReducer = combineReducers({
  //listOfMachines: MachineList,
  todo: () => {
    return {data:"balbal"};
  }
});

export default rootReducer;
