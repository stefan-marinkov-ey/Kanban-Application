import React from "react";
import InputField from "../InputField";
import { mount, shallow } from "enzyme";

describe("Input Component", () => {
  const wrapper = shallow(<InputField defaultValue="Hello" />);
  const input = wrapper.find("input");
  input.simulate("focus");
  it("should match snapshot", () => expect(input).toMatchSnapshot());
});
