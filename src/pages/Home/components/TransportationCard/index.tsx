import React from "react";
import BoxSvg from "../../../../assets/svg/BoxSvg";
import MapMarkerSvg from "../../../../assets/svg/MapMarkerSvg";
import FlexBlock from "../../../../components/FlexBlock";
import Text from "../../../../components/Text";
import "./index.scss";

const TransportationCard: React.FC = () => {
  return (
    <FlexBlock className="transportation-card">
      {/* <img /> */}
      <div
        style={{
          width: "170px",
          height: "128px",
          borderRadius: "8px",
          backgroundColor: "green",
        }}
      />
      <FlexBlock className="transportation-card_content" flexDirection="column">
        <Text color="gray-5" fontWeight="600" fontSize={20}>
          Газель фермер
        </Text>
        <FlexBlock className="transportation-card_row">
          <MapMarkerSvg />
          <Text color="gray-5" fontWeight="500" fontSize={14}>
            Екатеринбург
          </Text>
          <Text color="gray-5" fontWeight="700">
            26 сен, вс
          </Text>
        </FlexBlock>
        <FlexBlock className="transportation-card_row">
          <BoxSvg />
          <Text color="gray-5" fontSize={14} fontWeight="500">
            Тип груза:
          </Text>
          <Text color="gray-7" fontSize={14}>
            Личные вещи, Стройматериалы, Техника и оборудование и
          </Text>
          <Text color="blue-1" className="hover" fontSize={14}>
            еще 5 типов
          </Text>
        </FlexBlock>
      </FlexBlock>
      <FlexBlock className="transportation-card_price">
        <Text fontSize={14} color="gray-7">
          За 1 час
        </Text>
        <Text fontSize={16} fontWeight="600">
          от 550 ₽
        </Text>
      </FlexBlock>
    </FlexBlock>
  );
};

export default TransportationCard;
