import React from "react";
import { shallow } from "enzyme";
import SetNewCard from "../SetNewCard";

describe("SetNewCard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SetNewCard />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
