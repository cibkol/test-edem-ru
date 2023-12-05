import React from "react";
import { Link } from "react-router-dom";
import ChatSvg from "../../../../../../assets/svg/ChatSvg";
import AscentCounter from "../../../../../AscentCounter";
import "./index.scss";

const Chat: React.FC = () => {
  return (
    <Link to="/chat" className="chat hover">
      <ChatSvg />
      <AscentCounter newMessagesCount={10} />
    </Link>
  );
};

export default Chat;
