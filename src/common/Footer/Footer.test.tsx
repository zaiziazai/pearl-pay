import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Footer, { FooterProps } from "./Footer";
import { ActionButton } from "@fluentui/react";

describe("<SignUp />", () => {
  let wrapper: ShallowWrapper;

  const props: FooterProps = {
    socialMedias: [
        {
          link: "https://www.facebook.com",
          text: "Facebook",
        },
        {
          link: "https://www.instagram.com",
          text: "Instagram",
        },
        {
          link: "https://www.twitter.com",
          text: "Twitter",
        },
        {
          link: "https://www.youtube.com",
          text: "Youtube",
        },
        {
          link: "https://www.gmail.com",
          text: "Gmail",
        },
      ]
  };

  it("defines the component", () => {
    wrapper = shallow(<Footer {...props}/>);
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });

  it("should render 5 links", () => {
    expect(wrapper.find(ActionButton)).toHaveLength(5);
  });
  
});
