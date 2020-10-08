import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { App } from "./App";
import Section from "./common/Section/Section";
import Footer from "./common/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import { PrimaryButton } from "@fluentui/react";
import { ReactWrapper } from "enzyme";
import { mount } from "./setupTests";

const mockStore = configureStore();
// const mockDispatchfn = jest.fn(() => new Promise(resolve => resolve('')));
const mockDispatchfn = jest.fn();

describe("<App />", () => {
  let wrapper: ReactWrapper;

  const props: any = {
    getProfiles: jest.fn(),
    getQoutes: jest.fn(),
  };

  it("defines the component", () => {
    wrapper = mount(
      <Provider store={mockStore()}>
        <App {...props} dispatch={mockDispatchfn} />
      </Provider>
    );
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });

  it("should renders 4 Section component", () => {
    expect(wrapper.find(Section)).toHaveLength(4);
  });
  it("should renders 1 Footer component", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
  it("should render ContactUs component", () => {
    wrapper
      .findWhere(
        (n) => n.type() === PrimaryButton && n.prop("text") === "Contact us"
      )
      .simulate("click");
    expect(wrapper.find(ContactUs)).toHaveLength(1);
  });
});
