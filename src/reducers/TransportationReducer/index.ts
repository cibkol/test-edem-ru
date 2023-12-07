import { SET_TRANSPORTATION } from "../../actions/TransprtationActions";

import { ITransportationData, ITransportationPayload } from "./types";

const initialState: ITransportationData = {
  data: [],
  totalCards: 0,
};

export function transportationDataReducer(
  state: ITransportationData = initialState,
  action: {
    type: string;
    payload?: ITransportationPayload;
  }
) {
  switch (action.type) {
    case SET_TRANSPORTATION:
      if (!action.payload) return state;

      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
