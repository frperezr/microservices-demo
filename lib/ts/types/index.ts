export type TBudget = {
  id: string;
  name: string;
  userId: string;
  budgetLimit: number;
  spent: number;
  remaining: number;
  createdAt: string;
  updatedAt: string;
  items: [TBudgetItem];
};

export type TBudgetItem = {
  id: string;
  city: string;
  travelingCost: number;
  stayingCost: number;
};

export type TError = {
  code: number;
  message: string;
};

export type TGetBudgetResponse = {
  data: TBudget;
  error: TError;
};

export type TListbudgetsResponse = {
  data: [TBudget];
  error: TError;
};

export type TCreateBudgetResponse = {
  data: TBudget;
  error: TError;
};

export type TAddItemResponse = {
  data: TBudget;
  error: TError;
};

export type TDeleteItemResponse = {
  data: TBudget;
  error: TError;
};

export type TDeleteBudgetResponse = {
  data: TBudget;
  error: TError;
};

export type TContinent = {
  id: number;
  code: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TCountry = {
  id: number;
  continentCode: string;
  code: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TCity = {
  id: number;
  stayPrice: number;
  travelPrice: number;
  country: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TGetCityResponse = {
  data: TCity;
  error: TError;
};

export type TListCitiesResponse = {
  data: [TCity];
  error: TError;
};

export type TGetCountryResponse = {
  data: TCountry;
  error: TError;
};

export type TListCountriesResponse = {
  data: [TCountry];
  error: TError;
};

export type TGetContinentResponse = {
  data: TContinent;
  error: TError;
};

export type TListContinentsResponse = {
  data: [TContinent];
  error: TError;
};
