import React from "react";
import { shallow } from "enzyme";
import HeaderButons from "../HeaderButtons";

describe("Header Buttons", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HeaderButons />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
