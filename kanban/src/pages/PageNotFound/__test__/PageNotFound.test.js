import React from "react";
import { shallow } from "enzyme";
import PageNotFound from "../PageNotFound";

describe("PageNotFound", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PageNotFound />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
