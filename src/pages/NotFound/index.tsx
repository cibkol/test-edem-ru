import React from "react";
import { Link } from "react-router-dom";
import FlexBlock from "../../components/FlexBlock";
import Text from "../../components/Text";
import "./index.scss";

const NotFound: React.FC = () => {
  return (
    <FlexBlock className="not-found-page" flexDirection="column">
      <Text fontSize={24}>Страница не найдена</Text>
      <Link to="/">
        <Text fontSize={20}>Вернуться на главную</Text>
      </Link>
    </FlexBlock>
  );
};

export default NotFound;
