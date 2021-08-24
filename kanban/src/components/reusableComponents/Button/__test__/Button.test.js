import React from "react";
import Button from "../Button";
import { mount, shallow } from "enzyme";

describe("Button Component", () => {
  it("Should render", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  it("should find label", () => {
    const wrapper = shallow(<Button />);
    const form = wrapper.find("label");

    expect(form.getElements()).toMatchSnapshot();
  });
  it("should render correctly", () => {
    const wrapper = shallow(
      <Button title="text" label="Some label with text" children="" />
    );
    expect(wrapper.props()).toMatchSnapshot();
  });
});
