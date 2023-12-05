import React from "react";
import { Link } from "react-router-dom";
import NotificationsSvg from "../../../../../../assets/svg/NotificationsSvg";
import AscentCounter from "../../../../../AscentCounter";
import "./index.scss";

const Notification: React.FC = () => {
  return (
    <Link to="/notification" className="notification hover">
      <NotificationsSvg />
      <AscentCounter newMessagesCount={102} />
    </Link>
  );
};

export default Notification;
