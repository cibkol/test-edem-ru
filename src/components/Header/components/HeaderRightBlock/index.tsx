import React from "react";
import FlexBlock from "../../../FlexBlock";
import Chat from "./components/Chat";
import Notifications from "./components/Notifications";
import UserPanel from "./components/UserPanel";
import "./index.scss";

const HeaderRightBlock: React.FC = () => {
  return (
    <FlexBlock className="header-right-block">
      <Chat />
      <Notifications />
      <UserPanel />
    </FlexBlock>
  );
};

export default HeaderRightBlock;
