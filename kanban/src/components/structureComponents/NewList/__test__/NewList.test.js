import React from "react";
import { shallow } from "enzyme";
import Newist from "../Newist";

describe("Newist", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Newist />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
