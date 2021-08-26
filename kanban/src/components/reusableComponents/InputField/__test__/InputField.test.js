import React from "react";
import InputField from "../InputField";
import { mount, shallow } from "enzyme";

describe("Input Component", () => {
  const wrapper = shallow(<InputField defaultValue="Hello" />);
  const input = wrapper.find("input");
  input.simulate("focus");
  it("should match snapshot", () => expect(input).toMatchSnapshot());

  it("Should set value to state when input is changed", () => {
    const wrapper = shallow(<InputField />);
    const input = wrapper.find("input");
    input.simulate("change", {
      preventDefault: jest.fn,
      target: { value: "foo" },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
