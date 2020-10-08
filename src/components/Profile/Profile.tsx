import React from "react";
import {
  Card,
  ICardTokens,
  ICardSectionStyles,
  ICardSectionTokens,
} from "@uifabric/react-cards";
import {
  Persona,
  Image,
  Text,
  Icon,
  Stack,
  FontWeights,
  IIconStyles,
  ITextStyles} from "@fluentui/react";

import "./Profile.scss";

const cardTokens: ICardTokens = { childrenMargin: 12 };

const siteTextStyles: ITextStyles = {
  root: {
    color: "#025F52",
    fontWeight: FontWeights.semibold,
  },
};
const descriptionTextStyles: ITextStyles = {
  root: {
    color: "#333333",
    fontWeight: FontWeights.semibold,
  },
};
const iconStyles: IIconStyles = {
  root: {
    color: "#0078D4",
    fontSize: 16,
    fontWeight: FontWeights.regular,
  },
};
const footerCardSectionStyles: ICardSectionStyles = {
  root: {
    borderTop: "1px solid #F3F2F1",
  },
};

const footerCardSectionTokens: ICardSectionTokens = { padding: "12px 0px 0px" };
export interface ProfileProps {
  name: string;
  birthdate: Date;
  image?: string;
  position: string;
  aboutMe: string;
  className?: string;
}
const Profile = function (props: ProfileProps) {
  return (
    <div className={"profile " + (props.className ? props.className : "")}>
      <Card
        tokens={cardTokens}
        styles={{ root: { minWidth: "none", margin: "10px auto" } }}
      >
        <Card.Item>
          <Persona
            text={props.name}
            secondaryText={props.birthdate.toLocaleDateString()}
          />
        </Card.Item>
        <Card.Item fill>
          <Image
            src={props.image ? props.image : "https://placehold.it/256x144"}
            width="100%"
            alt="Placeholder image."
          />
        </Card.Item>
        <Card.Section>
          <Text variant="small" styles={siteTextStyles}>
            {props.position}
          </Text>
          <Text styles={descriptionTextStyles}>{props.aboutMe}</Text>
        </Card.Section>
        <Card.Section
          horizontal
          styles={footerCardSectionStyles}
          tokens={footerCardSectionTokens}
        >
          <Icon iconName="RedEye" styles={iconStyles} />
          <Icon iconName="SingleBookmark" styles={iconStyles} />
          <Stack.Item grow={1}>
            <span />
          </Stack.Item>
          <Icon iconName="MoreVertical" styles={iconStyles} />
        </Card.Section>
      </Card>
    </div>
  );
};
export default Profile;
