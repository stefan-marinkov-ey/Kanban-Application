import React from "react";
import { shallow } from "enzyme";
import DeleteCards from "../DeleteCards";

describe("Delete", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DeleteCards />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
