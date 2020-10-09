import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import SignUp, { SignUpProps } from "./SignUp";
import { PrimaryButton, Stack, TextField } from "@fluentui/react";

describe("<SignUp />", () => {
  let wrapper: ShallowWrapper;

  const props: SignUpProps = {
    onSubmit: jest.fn()
  };

  it("defines the component", () => {
    wrapper = shallow(<SignUp {...props}/>);
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });

  it("should render Stack component", () => {
    expect(wrapper.find(Stack)).toHaveLength(1);
  });

  it("should render Email texfield", () => {
    expect(wrapper.findWhere(
        (n) => n.type() === TextField && n.prop("className") === "email"
      )).toHaveLength(1);
  });
  it("should render Sign Up PrimaryButton", () => {
    expect(wrapper.findWhere(
        (n) => n.type() === PrimaryButton && n.prop("text") === "Sign Up"
      )).toHaveLength(1);
  });
  
});
