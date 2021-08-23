import React from "react";
import Button from "../Button";
import * as renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

describe("Button render", () => {
  const wrapper = shallow(<Button></Button>);
  expect(wrapper).toBe(true);
  it("should match snapshot", () => expect(wrapper).toMatchSnapshot());
});
