/**
 * @Author: harsha
 * @Date:   2020-10-09T14:21:43+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-13T15:49:33+02:00
 */

import "babel-polyfill";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
