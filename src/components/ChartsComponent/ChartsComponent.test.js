/**
 * @Author: harsha
 * @Date:   2020-10-13T16:05:19+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-13T16:42:13+02:00
 */

import React from "react";
import { shallow } from "enzyme";

import { ChartsComponent } from "./ChartsComponent";
import { TEMPERATURES } from "../../helpers/constants";
import chartData from "../../mock/chart-data.json";

describe("Test Suite for ChartsComponent", () => {
  let wrapper;

  const props = {
    classes: {},
    currentTempType: TEMPERATURES.CELCIUS,
    selectedWeather: {}
  };

  beforeEach(() => {
    wrapper = shallow(<ChartsComponent {...props} />);
  });

  it("Should return empty div if selectedWeather is empty", () => {
    expect(wrapper.contains(<div />)).toEqual(true);
  });

  it("Should return Charts  if data is valid", () => {
    props.selectedWeather = chartData[0];
    wrapper = shallow(<ChartsComponent {...props} />);
    expect(wrapper.find("#temp-chart").length).toEqual(1);
  });
});
