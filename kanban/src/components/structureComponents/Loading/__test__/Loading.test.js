import React from "react";
import { shallow } from "enzyme";
import Loading from "../Loading";

describe("Loading", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Loading />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
