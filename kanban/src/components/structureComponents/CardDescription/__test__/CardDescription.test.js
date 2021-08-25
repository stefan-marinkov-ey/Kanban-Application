import React from "react";
import { shallow } from "enzyme";
import CardDescription from "../CardDescription";

describe("Desc", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardDescription />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
