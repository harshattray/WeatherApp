/**
 * @Author: harsha
 * @Date:   2020-10-10T15:46:23+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-13T18:23:51+02:00
 */

import axios from "axios";
import {
  INIT_FETCH_WEATHER,
  FETCHING_WEATHER,
  FETCHING_WEATHER_FAIL,
  SELECT_WEATHER_CARD,
  SET_CURRENT_INDEX,
  SELECTED_TEMP_TYPE
} from "./types";

import { API } from "../helpers/constants";

/**
 * [fetchWeatherData  fetch call to get the weather data]
 * @return {[type]} [description]
 */

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

/**
 * [selectWeatherCard selects card]
 * @param  {[type]} value [takes in the selected value]
 * @return {[type]}       [description]
 */

export const selectWeatherCard = value => async (dispatch, getState) => {
  dispatch({
    type: SELECT_WEATHER_CARD,
    payload: value
  });
};

/**
 * [setCurrentIndex sets the current Index valu which can be incremented or decremented based on the pagination]
 * @param {[type]} value [description]
 */

export const setCurrentIndex = value => async (dispatch, getState) => {
  dispatch({
    type: SET_CURRENT_INDEX,
    payload: value
  });
};

/**
 * [selectTempType Helps in selecting the temperature value, the initial value is set in the reducer and it can be switched using this]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */

export const selectTempType = value => async (dispatch, getState) => {
  dispatch({
    type: SELECTED_TEMP_TYPE,
    payload: value
  });
};

/**
 * [initfetchWeatherData Initial call to set the isLoading state which is responsible for the loading spinner]
 * @return {[type]} [description]
 */

export const initfetchWeatherData = () => {
  return {
    type: INIT_FETCH_WEATHER,
    isLoading: true
  };
};
