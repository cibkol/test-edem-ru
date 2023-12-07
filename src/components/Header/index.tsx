import React from "react";
import FlexBlock from "../FlexBlock";
import HeaderLeftBlock from "./components/HeaderLeftBlock";
import HeaderRightBlock from "./components/HeaderRightBlock";
import "./index.scss";

const Header: React.FC = () => {
  console.log("render");

  return (
    <header className="header">
      <FlexBlock className="header_content-block">
        <HeaderLeftBlock />
        <HeaderRightBlock />
      </FlexBlock>
    </header>
  );
};

export default Header;
