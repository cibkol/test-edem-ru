import React from "react";
import { FOOTER_LINKS } from "../../../../constants";
import FlexBlock from "../../../FlexBlock";
import Text from "../../../Text";
import GooglePlayPng from "../../../../assets/png/google-play-retina.png";
import AppStorePng from "../../../../assets/png/app-store-retina.png";
import VkSvg from "../../../../assets/svg/VkSvg";
import OkSvg from "../../../../assets/svg/OkSvg";
import TgSvg from "../../../../assets/svg/TgSvg";
import "./index.scss";

const FooterTopPanel: React.FC = () => {
  const getLinks = () =>
    FOOTER_LINKS.map((link) => (
      <Text
        fontSize={14}
        className="footer-links_link"
        color="gray-5"
        key={link.name}
      >
        {link.name}
      </Text>
    ));

  return (
    <FlexBlock className="footer-top-panel">
      <div className="footer-links">{getLinks()}</div>
      <FlexBlock className="footer-stores" flexDirection="column">
        <img className="hover" src={GooglePlayPng} alt="GooglePlay" />
        <img className="hover" src={AppStorePng} alt="AppStore" />
      </FlexBlock>
      <FlexBlock className="footer-messengers">
        <VkSvg />
        <OkSvg />
        <TgSvg />
      </FlexBlock>
    </FlexBlock>
  );
};

export default FooterTopPanel;
