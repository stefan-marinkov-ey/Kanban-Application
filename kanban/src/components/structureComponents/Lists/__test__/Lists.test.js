import React from "react";
import { shallow } from "enzyme";
import Lists from "../Lists";

describe("Lists", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Lists />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
