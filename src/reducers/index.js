/**
 * @Author: harsha
 * @Date:   2020-10-09T16:51:09+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-10T16:05:25+02:00
 */

import { combineReducers } from "redux";
import WeatherReducers from "./fetchWeatherReducers";

export default combineReducers({
  weatherStack: WeatherReducers
});
