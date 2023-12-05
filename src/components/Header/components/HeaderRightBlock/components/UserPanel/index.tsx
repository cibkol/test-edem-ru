import React from "react";
import Avatar from "../../../../../../assets/png/Mask.jpg";
import FlexBlock from "../../../../../FlexBlock";
import Text from "../../../../../Text";
import "./index.scss";

const UserPanel: React.FC = () => {
  return (
    <FlexBlock className="user-panel hover">
      <img
        className="avatar"
        src={Avatar}
        alt="Avatar"
        width={32}
        height={32}
      />
      <Text fontSize={14} fontWeight={"500"}>
        Оксана
      </Text>
    </FlexBlock>
  );
};

export default UserPanel;
