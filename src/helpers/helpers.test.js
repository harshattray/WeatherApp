/**
 * @Author: harsha
 * @Date:   2020-10-13T17:11:11+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-13T17:23:47+02:00
 */

import {
  weatherDataBuilder,
  convertKelvinToCelsius,
  convertKelvinToFahrenheit
} from "./helpers";
import dummyData from "../mock/data.json";
import weatherMock from "../mock/chart-data.json";

describe("Test Suite for utils", () => {
  it("Should return empty json object if response is invalid", () => {
    expect(weatherDataBuilder()).toEqual([]);
  });

  it("Should return valid array in expected format", () => {
    expect(weatherDataBuilder(dummyData)).toEqual(weatherMock);
  });

  it("Should get value in fahrenheit", () => {
    expect(convertKelvinToFahrenheit(300)).toEqual(80);
  });

  it("Should get value in Celsius", () => {
    expect(convertKelvinToCelsius(300)).toEqual(26.85);
  });
});
