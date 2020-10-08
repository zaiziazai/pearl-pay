import React from "react";
import {
  Card,
  ICardTokens,
  ICardSectionStyles,
  ICardSectionTokens,
} from "@uifabric/react-cards";
import {
  Text,
  Icon,
  Stack,
  FontWeights,
  IIconStyles,
  ITextStyles,
} from "@fluentui/react";

import "./Card.scss";

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
export interface CustomCardProps {
  author: string;
  qoute: string;
  className?: string;
}
const CustomCard = function (props: CustomCardProps) {
  return (
    <div className={"customCard " + (props.className ? props.className : "")}>
      <Card
        aria-label="Clickable vertical card with image bleeding at the center of the card"
        tokens={cardTokens}
        styles={{ root: { minWidth: "none", margin: "10px auto" } }}
      >
        <Card.Section>
          <Text variant="small" styles={siteTextStyles}>
            {props.author}
          </Text>
          <Text styles={descriptionTextStyles}>{props.qoute}</Text>
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

export default CustomCard;
