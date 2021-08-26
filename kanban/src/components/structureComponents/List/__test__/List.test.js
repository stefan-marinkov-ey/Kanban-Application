import React from "react";
import { shallow } from "enzyme";
import List from "../List";

describe("List", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<List />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
