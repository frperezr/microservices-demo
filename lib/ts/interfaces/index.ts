// declarations
import { Context } from "../declarations";

// types
import { TBudget, TBudgetItem, TCity, TCountry, TContinent } from "../types";

export interface IBudgetStore {
  getBudget(id: string): Promise<TBudget>;
  listBudgets(userId: string): Promise<[TBudget]>;
  createBudget(userId: string, budgetLimit: number, name: string): Promise<TBudget>;
  updateBudget(
    budgetId: string,
    budgetLimit: number,
    spent: number,
    remaining: number
  ): Promise<TBudget>;
  deleteBudget(id: string): Promise<TBudget>;
  getItem(itemId: string): Promise<TBudgetItem>;
  addItem(budgetId: string, item: TBudgetItem): Promise<TBudgetItem>;
  deleteItem(budgetId: string, item: TBudgetItem): Promise<TBudgetItem>;
}

export interface ICountryStore {
  getCity(id: number): Promise<TCity>;
  listCities(country: string): Promise<[TCity]>;
  getCountry(id: number): Promise<TCountry>;
  listCountries(continent: string): Promise<[TCountry]>;
  getContinent(id: number): Promise<TContinent>;
  listContinents(): Promise<[TContinent]>;
}

export interface IBudgetRPC {
  getBudget(ctx: Context, next: Function): Promise<void>;
  listBudgets(ctx: Context, next: Function): Promise<void>;
  createBudget(ctx: Context, next: Function): Promise<void>;
  addItem(ctx: Context, next: Function): Promise<void>;
  deleteItem(ctx: Context, next: Function): Promise<void>;
  deleteBudget(ctx: Context, next: Function): Promise<void>;
}

export interface ICountriesRPC {
  getCity(ctx: Context, next: Function): Promise<void>;
  listCities(ctx: Context, next: Function): Promise<void>;
  getCountry(ctx: Context, next: Function): Promise<void>;
  listCountries(ctx: Context, next: Function): Promise<void>;
  getContinent(ctx: Context, next: Function): Promise<void>;
  listContinents(ctx: Context, next: Function): Promise<void>;
}

export interface IBucketService {
  getBudget(id: string): Promise<TBudget>;
  listBudgets(userId: string): Promise<[TBudget]>;
  createBudget(userId: string, budgetLimit: number, name: string): Promise<TBudget>;
  addItem(budgetId: string, item: TBudgetItem): Promise<TBudget>;
  deleteItem(budgetId: string, item: TBudgetItem): Promise<TBudget>;
  deleteBudget(id: string): Promise<TBudget>;
}

export interface ICountriesService {
  getCity(id: number): Promise<TCity>;
  listCities(country: string): Promise<[TCity]>;
  getCountry(id: number): Promise<TCountry>;
  listCountries(continent: string): Promise<[TCountry]>;
  getContinent(id: number): Promise<TContinent>;
  listContinents(): Promise<[TContinent]>;
}
