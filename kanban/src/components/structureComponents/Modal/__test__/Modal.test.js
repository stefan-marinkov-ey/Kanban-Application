import React from "react";
import { shallow } from "enzyme";
import Modal from "../Modal";

describe("Modal", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Modal />);
  });
  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
