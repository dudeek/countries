import { defineStore } from "pinia";
import { getCountriesList } from "@/service/countries.service";
import type { ICountry } from "@/types/countries";
import { useCommon } from "@/hooks/common.hook";

export type CountriesState = {
  isLoading: boolean;
  countriesList: ICountry[];
};

const { handleError } = useCommon();

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
        handleError("Request failed");
      } finally {
        this.isLoading = false;
      }
    },
  },
});
