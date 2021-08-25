import React from "react";
import { shallow } from "enzyme";
import EditCard from "../EditCard";

describe("Edit", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditCard />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
