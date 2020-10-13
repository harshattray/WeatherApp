/**
 * @Author: harsha
 * @Date:   2020-10-13T16:42:01+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-13T16:49:27+02:00
 */

import React from "react";

import { TemperatureSelectorComponent } from "./TemperatureSelectorComponent";
import ReactDOM from "react-dom";
import { TEMPERATURES } from "../../helpers/constants";
import { shallow } from "enzyme";

describe("Checks if TemperatureSelectorComponent is rendered", () => {
  const props = {
    selectedTemp: TEMPERATURES.CELCIUS
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TemperatureSelectorComponent {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should return empty div if selectedCard is empty", () => {
    const mockOnTempRadioButtonClick = jest.fn();
    props.selectTempType = mockOnTempRadioButtonClick;
    const wrapper = shallow(<TemperatureSelectorComponent {...props} />);
    wrapper
      .find("#celcius-radio")
      .at(0)
      .simulate("click");
    wrapper
      .find("#fr-radio")
      .at(0)
      .simulate("click");
    expect(mockOnTempRadioButtonClick).toHaveBeenCalled();
  });
});
