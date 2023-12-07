import { ITransportationPayload } from "../../reducers/TransportationReducer/types";

export const SET_TRANSPORTATION = "SET_TRANSPORTATION";

export const SET_TRANSPORTATION_ACTION = (payload: ITransportationPayload) => ({
  type: SET_TRANSPORTATION,
  payload,
});
