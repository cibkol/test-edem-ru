export interface ITransportationCard {
  date: string;
  name: string;
  price: string;
  types: string[];
  city: string;
  image?: string;
}

export interface ITransportationData {
  data: ITransportationCard[];
  totalCards: number;
}

export interface ITransportationPayload {
  data?: ITransportationCard[];
  totalCards?: number;
}
