import React from "react";
import "./index.scss";
import Header from "../../Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer";
import FlexBlock from "../../FlexBlock";

const DefaultLayout: React.FC = () => {
  return (
    <FlexBlock flexDirection="column" className="default-layout">
      <Header />
      <main className="default-layout_content">
        <Outlet />
      </main>
      <Footer />
    </FlexBlock>
  );
};

export default DefaultLayout;
