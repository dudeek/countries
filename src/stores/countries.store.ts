import { defineStore } from "pinia";
import { getCountriesList } from "@/service/countries.service";
import type { ICountry } from "@/types/countries";

export type CountriesState = {
  isLoading: boolean;
  countriesList: ICountry[];
};

export const useCountriesStore = defineStore("countries", {
  state: (): CountriesState => ({
    isLoading: false,
    countriesList: [],
  }),

  actions: {
    async getCountriesList() {
      this.isLoading = true;

      try {
        this.countriesList = await getCountriesList();
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
