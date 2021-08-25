import React from "react";
import { shallow } from "enzyme";
import CardHolder from "../CardHolder";

describe("Holder", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardHolder />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
