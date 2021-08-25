import React from "react";
import { shallow } from "enzyme";
import Cards from "../Cards";

describe("Card", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Cards />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
