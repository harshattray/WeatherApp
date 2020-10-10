/**
 * @Author: harsha
 * @Date:   2020-10-10T15:46:23+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-10T16:11:30+02:00
 */

import axios from "axios";
import {
  INIT_FETCH_WEATHER,
  FETCHING_WEATHER,
  FETCHING_WEATHER_FAIL
} from "./types";

import { API } from "../helpers/constants";

export const fetchWeatherData = () => async (dispatch, getState) => {
  dispatch(initfetchWeatherData());
  try {
    const res = await axios.get(API);
    dispatch({
      type: FETCHING_WEATHER,
      payload: res,
      isLoading: false
    });
  } catch (e) {
    dispatch({
      type: FETCHING_WEATHER_FAIL,
      payload: e,
      isLoading: false
    });
  }
};

export const initfetchWeatherData = () => {
  return {
    type: INIT_FETCH_WEATHER,
    isLoading: true
  };
};
