import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Section, { heading, SectionProps } from "./Section";

describe("<Section />", () => {
  let wrapper: ShallowWrapper;

  const props: SectionProps = {
    headLine: "Sample Headline",
    headingType: heading.MAJOR
  };

  it("defines the component", () => {
    wrapper = shallow(<Section {...props}/>);
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });
  it("should renders heading div with major classname", () => {
    expect(wrapper.findWhere(
        (n) => n.prop("className") === ("headLine "+heading.MAJOR)
      )).toHaveLength(1);
  });
  
});
