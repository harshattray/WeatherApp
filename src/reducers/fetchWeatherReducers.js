/**
 * @Author: harsha
 * @Date:   2020-10-10T15:56:59+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-12T12:16:47+02:00
 */

import {
  INIT_FETCH_WEATHER,
  FETCHING_WEATHER,
  FETCHING_WEATHER_FAIL,
  SELECT_WEATHER_CARD,
  SET_CURRENT_INDEX
} from "../actions/types";

import { weatherDataBuilder } from "../helpers/helpers";

let initial_state = {
  isLoading: true,
  currentIndex: 0
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case INIT_FETCH_WEATHER:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case FETCHING_WEATHER:
      return {
        ...state,
        weatherData: weatherDataBuilder(action.payload.data),
        selectedWeather: weatherDataBuilder(action.payload.data)[0],
        isLoading: action.isLoading
      };
    case SELECT_WEATHER_CARD:
      return {
        ...state,
        selectedWeather: action.payload
      };
    case SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.payload
      };
    default:
      return state;
  }
};
