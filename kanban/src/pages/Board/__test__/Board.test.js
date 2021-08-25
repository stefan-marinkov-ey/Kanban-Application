import React from "react";
import { shallow } from "enzyme";
import Board from "../Board";

describe("Board", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Board />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
