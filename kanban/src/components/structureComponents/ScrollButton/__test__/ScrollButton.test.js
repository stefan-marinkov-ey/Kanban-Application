import React from "react";
import { shallow } from "enzyme";
import ScrollButton from "../ScrollButton";

describe("ScrollButton", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ScrollButton />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
