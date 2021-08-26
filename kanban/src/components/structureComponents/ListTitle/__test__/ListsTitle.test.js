import React from "react";
import { shallow } from "enzyme";
import ListsTitle from "../ListsTitle";

describe("ListsTitle", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ListsTitle />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
