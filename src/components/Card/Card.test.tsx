import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Text } from "@fluentui/react";
import { Card } from "@uifabric/react-cards";
import CustomCard, { CustomCardProps } from "./Card";

describe("<SignUp />", () => {
  let wrapper: ShallowWrapper;

  const props: CustomCardProps = {
    author: "Contoso Contoso",
    qoute: "Lorem ipsum, dolor sit amet consectetur adipisicing elit"
  };

  it("defines the component", () => {
    wrapper = shallow(<CustomCard {...props}/>);
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });

  it("should render Card component", () => {
    expect(wrapper.find(Card)).toHaveLength(1);
  });

  it("should render Text component", () => {
    expect(wrapper.find(Text)).toHaveLength(2);
  });
  
});
