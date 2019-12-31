import axios from "axios";
const WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
import {SET_MACHINE_LIST} from "./actions-types";
import { AsyncStorage } from "react-native";

export const getMachineFromDealerInventory = () => async dispatch => {
  const response = await axios.get(
    'https://rakord.fr/sql/machineList.php'
  );
  dispatch({ type: SET_MACHINE_LIST, payload: response.data });
};
