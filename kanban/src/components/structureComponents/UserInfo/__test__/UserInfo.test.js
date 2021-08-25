import React from "react";
import { shallow } from "enzyme";
import UserInfo from "../UserInfo";

describe("UserInfo", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserInfo />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
