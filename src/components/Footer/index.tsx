import React from "react";
import FooterBottomPanel from "./components/FooterBottomPanel";
import FooterTopPanel from "./components/FooterTopPanel";
import "./index.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <FooterTopPanel />
      <FooterBottomPanel />
    </footer>
  );
};

export default Footer;
