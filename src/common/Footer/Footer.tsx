import { ActionButton, Stack } from "@fluentui/react";
import React from "react";
import "./Footer.scss";
export interface FooterProps {
  socialMedias: { text: string; link: string }[];
}
const Footer = function (props: FooterProps) {
  return (
    <div className="Footer">
      <Stack horizontal horizontalAlign="center">
        {props.socialMedias.map((socialMedia, key) => (
          <ActionButton
            key={key + "link"}
            text={socialMedia.text}
            href={socialMedia.link}
            target="_blank"
          />
        ))}
      </Stack>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab,
        natus harum nobis, illo ducimus, ullam quae dolore consequatur quibusdam
        quia. Error, dolores harum vel obcaecati exercitationem cumque eligendi
        similique.
      </p>
    </div>
  );
};

export default Footer;
