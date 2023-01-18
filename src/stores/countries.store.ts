import { defineStore } from "pinia";
import { getCountriesList } from "@/service/countries.service";

export const useCountriesStore = defineStore("countries", {
  state: () => ({
    isLoading: false,
    countriesList: [],
  }),

  actions: {
    async getCountriesList() {
      this.isLoading = true;
      this.countriesList = await getCountriesList();
      this.isLoading = false;
    },
  },
});
