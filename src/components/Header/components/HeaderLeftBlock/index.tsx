import React from "react";
import { Link } from "react-router-dom";
import LogoSvg from "../../../../assets/svg/LogoSvg";
import FlexBlock from "../../../FlexBlock";
import Text from "../../../Text";
import "./index.scss";

const HeaderLeftBlock: React.FC = () => {
  return (
    <FlexBlock className="header-left-block">
      <Link to="/">
        <LogoSvg />
      </Link>
      <Text color="gray-3" maxWidth="160px" fontSize={12} lineHeight="16px">
        Лучший способ путешествовать дешевле
      </Text>
    </FlexBlock>
  );
};

export default HeaderLeftBlock;
