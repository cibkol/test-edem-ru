import React from "react";
import "./index.scss";

interface IPropsAscentCounter {
  newMessagesCount?: number;
}

const AscentCounter: React.FC<IPropsAscentCounter> = ({ newMessagesCount }) => {
  if (!newMessagesCount) return <></>;

  return (
    <span className="ascent-counter">
      {newMessagesCount > 99 ? "99+" : newMessagesCount}
    </span>
  );
};

export default AscentCounter;
