/**
 * @Author: harsha
 * @Date:   2020-10-10T16:40:49+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-13T18:30:11+02:00
 */

import moment from "moment";
import {
  TIME_FORMAT,
  DATE_FORMAT,
  TIME_DISPLAY_FORMAT,
  DATE_DISPLAY_FORMAT,
  TEMPERATURES
} from "./constants";

/**
 * [isMobile To check the window size, handy to switch from desktop to mobile]
 * @return {Boolean} [description]
 */

export const isMobile = () => window.screen.availWidth < 767;

/**
 * [weatherDataBuilder Weather stack builder, this is called in the reducer which feeds the return value from here to the store]
 * @param  {[type]} weather [description]
 * @return {[type]}         [description]
 */

export const weatherDataBuilder = weather => {
  if (!weather || !weather.list) {
    return [];
  }

  const weatherDataStack = new Map();

  weather.list.forEach(weatherDataByDate => {
    const parsedDate = moment(weatherDataByDate.dt_txt, TIME_FORMAT);
    const date = parsedDate.format(DATE_FORMAT);
    if (!weatherDataStack.get(date)) {
      weatherDataStack.set(date, {
        displayDate: parsedDate.format(DATE_DISPLAY_FORMAT),
        weatherByHour: [],
        date
      });
    }
    weatherDataStack.get(date).weatherByHour.push({
      hour: parsedDate.format(TIME_DISPLAY_FORMAT),
      [TEMPERATURES.CELCIUS]: convertKelvinToCelsius(
        weatherDataByDate.main.temp
      ),
      [TEMPERATURES.KELVIN]: weatherDataByDate.main.temp,
      [TEMPERATURES.FAHRENHEIT]: convertKelvinToFahrenheit(
        weatherDataByDate.main.temp
      )
    });
  });
  weatherDataStack.forEach((value, key, map) => {
    let celciusSum = 0,
      fahrenheitSum = 0;
    value.weatherByHour.forEach(hourTemp => {
      celciusSum += hourTemp[TEMPERATURES.CELCIUS];
      fahrenheitSum += hourTemp[TEMPERATURES.FAHRENHEIT];
    });
    value[TEMPERATURES.CELCIUS] = (
      celciusSum / value.weatherByHour.length
    ).toFixed(2);
    value[TEMPERATURES.FAHRENHEIT] = (
      fahrenheitSum / value.weatherByHour.length
    ).toFixed(2);
    map.set(key, value);
  });
  return Array.from(weatherDataStack.values());
};

/**
 * [convertKelvinToCelsius description]
 * @param  {[type]} kelvin [description]
 * @return {[type]}        [description]
 */

export const convertKelvinToCelsius = kelvin => {
  if (kelvin < 0) {
    throw new Error("Invalid");
  } else {
    return parseFloat((kelvin - 273.15).toFixed(2));
  }
};

/**
 * [convertKelvinToFahrenheit description]
 * @param  {[type]} kelvin [description]
 * @return {[type]}        [description]
 */
export const convertKelvinToFahrenheit = kelvin => {
  if (kelvin < 0) {
    throw new Error("Invalid");
  } else {
    return parseFloat(
      Math.floor(convertKelvinToCelsius(kelvin) * (9 / 5) + 32).toFixed(2)
    );
  }
};
