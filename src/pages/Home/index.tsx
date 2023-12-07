import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_TRANSPORTATION_ACTION } from "../../actions/TransprtationActions";
import axios from "../../api/axios";
import FlexBlock from "../../components/FlexBlock";
import Text from "../../components/Text";
import {
  transportationDataSelector,
  transportationTotalCountCardsSelector,
} from "../../selectors/TransportationSelector";
import TransportationCard from "./components/TransportationCard";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import "./index.scss";
import ContentLoader from "react-content-loader";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const transportationData = useSelector(transportationDataSelector);
  const transportationTotalCountCards = useSelector(
    transportationTotalCountCardsSelector
  );

  const [isLoading, setIsLoading] = useState(true);

  const contentIsFull =
    transportationTotalCountCards === transportationData.length;

  useEffect(() => {
    axios
      .get("totalTransportationCards")
      .then((res) => {
        dispatch(
          SET_TRANSPORTATION_ACTION({
            totalCards: res.data.totalCards,
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("transportation", {
        params: {
          _limit: 30,
          _page: 1,
        },
      })
      .then((res) => {
        setIsLoading(false);
        dispatch(
          SET_TRANSPORTATION_ACTION({
            data: res.data,
          })
        );
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  }, [dispatch]);

  const onBottom = () => {
    if (isLoading) return;
    if (contentIsFull) {
      alert("Поездок больше не найдено");
      return;
    }
    setIsLoading(true);

    axios
      .get("transportation", {
        params: {
          _page: Math.trunc(transportationData.length / 10 + 1),
        },
      })
      .then((res) => {
        setIsLoading(false);
        dispatch(
          SET_TRANSPORTATION_ACTION({
            data: [...transportationData, ...res.data],
          })
        );
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        SET_TRANSPORTATION_ACTION({});
      });
  };

  useBottomScrollListener<HTMLDivElement>(onBottom);

  return (
    <FlexBlock className="home-page" flexDirection="column">
      <FlexBlock>
        <Text fontSize={28} fontWeight="600">
          Найдено: {isLoading ? "..." : transportationData.length}{" "}
          грузоперевозок
        </Text>
      </FlexBlock>
      <FlexBlock className="transportation-cards-list" flexDirection="column">
        {transportationData.map((transportation, index) => (
          <TransportationCard {...transportation} key={transportation.id} />
        ))}
        {contentIsFull && !isLoading && (
          <FlexBlock className="transportation-cards-list_full">
            <Text fontSize={24}>Поездок больше не найдено</Text>
          </FlexBlock>
        )}
        {isLoading && (
          <ContentLoader
            speed={2}
            width="100%"
            height={168}
            backgroundColor="#fff"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="100%" height="168" />
          </ContentLoader>
        )}
      </FlexBlock>
    </FlexBlock>
  );
};

export default Home;
