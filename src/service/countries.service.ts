import type { ICountry } from "@/types/countries";

export const getCountriesList = async (): Promise<ICountry[]> => {
  return (await fetch("https://restcountries.com/v2/all")).json();
};
