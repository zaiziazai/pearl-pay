import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Image, Persona, Text } from "@fluentui/react";
import Profile, { ProfileProps } from "./Profile";
import { Card } from "@uifabric/react-cards";

describe("<Profile />", () => {
  let wrapper: ShallowWrapper;

  const props: ProfileProps = {
    name: "Contoso Contoso",
    birthdate: new Date("19/10/1998"),
    position: "Software Engineer",
    aboutMe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  };

  it("defines the component", () => {
    wrapper = shallow(<Profile {...props}/>);
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });

  it("should render Card component", () => {
    expect(wrapper.find(Card)).toHaveLength(1);
  });

  it("should render Persona component", () => {
    expect(wrapper.find(Persona)).toHaveLength(1);
  });

  it("should render Image component", () => {
    expect(wrapper.find(Image)).toHaveLength(1);
  });

  it("should render Text component", () => {
    expect(wrapper.find(Text)).toHaveLength(2);
  });
  
});
