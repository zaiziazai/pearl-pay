import React from "react";
import { DefaultButton, Modal, PrimaryButton, TextField } from "@fluentui/react";
import { shallow, ShallowWrapper } from "enzyme";
import ContactUs, { ContactUsProps } from "./ContactUs";

describe("<ContactUs />", () => {
  let wrapper: ShallowWrapper;

  const props: ContactUsProps = {
    onDismiss: jest.fn(),
    onSubmit: jest.fn(),
  };

  it("defines the component", () => {
    wrapper = shallow(<ContactUs {...props}/>);
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });

  it("should render Modal component", () => {
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
  it("should renders Email texfield", () => {
    expect(wrapper.findWhere(
        (n) => n.type() === TextField && n.prop("label") === "Email"
      )).toHaveLength(1);
  });
  it("should renders Subject texfield", () => {
    expect(wrapper.findWhere(
        (n) => n.type() === TextField && n.prop("label") === "Subject"
      )).toHaveLength(1);
  });
  it("should renders Body texfield", () => {
    expect(wrapper.findWhere(
        (n) => n.type() === TextField && n.prop("label") === "Body" && n.prop("multiline")
      )).toHaveLength(1);
  });
  it("should renders Submit PrimaryButton", () => {
    expect(wrapper.findWhere(
        (n) => n.type() === PrimaryButton && n.prop("text") === "Submit"
      )).toHaveLength(1);
  });
  it("should renders Cancel DefaultButton", () => {
    expect(wrapper.findWhere(
        (n) => n.type() === DefaultButton && n.prop("text") === "Cancel"
      )).toHaveLength(1);
  });
});
