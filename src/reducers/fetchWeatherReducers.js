/**
 * @Author: harsha
 * @Date:   2020-10-10T15:56:59+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-10T16:07:59+02:00
 */

import {
  INIT_FETCH_WEATHER,
  FETCHING_WEATHER,
  FETCHING_WEATHER_FAIL
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case INIT_FETCH_WEATHER:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case FETCHING_WEATHER:
      return {
        ...state,
        weatherData: action.payload.data,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};
