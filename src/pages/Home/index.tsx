import React from "react";
import FlexBlock from "../../components/FlexBlock";
import Text from "../../components/Text";
import TransportationCard from "./components/TransportationCard";
import "./index.scss";

const Home: React.FC = () => {
  return (
    <FlexBlock className="home-page" flexDirection="column">
      <FlexBlock>
        <Text fontSize={28} fontWeight="600">
          Найдено: 1 грузоперевозка
        </Text>
      </FlexBlock>
      <FlexBlock className="transportation-cards-list" flexDirection="column">
        <TransportationCard />
      </FlexBlock>
    </FlexBlock>
  );
};

export default Home;
