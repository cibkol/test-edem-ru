import { IStoreState } from "../../types";

export const transportationDataSelector = (state: IStoreState) =>
  state.transportationData.data;

export const transportationTotalCountCardsSelector = (state: IStoreState) =>
  state.transportationData.totalCards;
