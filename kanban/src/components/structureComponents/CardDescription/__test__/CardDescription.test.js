import React from "react";
import { shallow } from "enzyme";
import CardDescription from "../CardDescription";
import { useManageContext } from "../../../../Context";

describe("Desc", () => {
  const { state } = useManageContext;
  const wrapper = shallow(<CardDescription>{state}</CardDescription>);

  it("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
