import React from "react";
import BoxSvg from "../../../../assets/svg/BoxSvg";
import MapMarkerSvg from "../../../../assets/svg/MapMarkerSvg";
import FlexBlock from "../../../../components/FlexBlock";
import Text from "../../../../components/Text";
import { ITransportationCard } from "../../../../reducers/TransportationReducer/types";
import "./index.scss";

const TransportationCard: React.FC<ITransportationCard> = ({
  city,
  date,
  name,
  price,
  types,
  image,
}) => {
  const dateFormat = new Date(date);

  const firstTypes = types.slice(0, 3);
  const lastTypes = types.length > 3 && types.slice(2, -1);

  return (
    <FlexBlock className="transportation-card">
      {image && (
        <img
          src={image}
          width={170}
          height={128}
          className="transportation-card_image-block"
          alt="photo_auto"
        />
      )}

      <FlexBlock className="transportation-card_content" flexDirection="column">
        <Text className="hover" color="gray-5" fontWeight="600" fontSize={20}>
          {name}
        </Text>
        <FlexBlock className="transportation-card_row">
          <MapMarkerSvg />
          <Text color="gray-5" fontWeight="500" fontSize={14}>
            {city}
          </Text>
          <Text color="gray-5" fontWeight="700">
            {dateFormat.getDate()}{" "}
            {dateFormat.toLocaleString("default", {
              month: "short",
              weekday: "short",
            })}
          </Text>
        </FlexBlock>
        <FlexBlock className="transportation-card_row">
          <BoxSvg />
          <Text color="gray-5" fontSize={14} fontWeight="500">
            Тип груза:
          </Text>
          <Text color="gray-7" fontSize={14}>
            {firstTypes.length
              ? firstTypes.map(
                  (type, index) =>
                    `${type}${
                      index + 1 === firstTypes.length
                        ? !lastTypes
                          ? "."
                          : " и "
                        : ", "
                    } `
                )
              : "отсутствует"}
          </Text>
          {lastTypes && (
            <Text color="blue-1" className="hover" fontSize={14}>
              еще {lastTypes.length} типов
            </Text>
          )}
        </FlexBlock>
      </FlexBlock>
      <FlexBlock className="transportation-card_price">
        <Text fontSize={14} color="gray-7">
          За 1 час
        </Text>
        <Text fontSize={16} fontWeight="600">
          от {price} ₽
        </Text>
      </FlexBlock>
    </FlexBlock>
  );
};

export default TransportationCard;
