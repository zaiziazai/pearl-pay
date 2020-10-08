import { CommandBarButton, SearchBox, Stack } from "@fluentui/react";
import React from "react";
import "./Navigation.scss";

export interface INavigationItems {
  key?: any;
  text: string;
  onClick: (section: string) => void;
}

export interface NavigationProps {
  items: INavigationItems[];
}

export default function Navigation(props: NavigationProps) {
  // return <Stack horizontal >
  //     <SearchBox placeholder="Search" underlined />
  //     {
  //         props.items.map((item)=><CommandBarButton text={item.text} onClick={()=>item.onClick(item.key)}/>)
  //     }
  // </Stack>

  return (
    <nav className="navigation">
      <div className="searchBar">
        <SearchBox placeholder="Search" underlined />
      </div>
      <div className="navItems">
        <li>
          <CommandBarButton text="Home" />
        </li>
        <li>
          <CommandBarButton text="Section 1" />
        </li>
        <li>
          <CommandBarButton text="Section 2" />
        </li>
      </div>
    </nav>
  );
}
