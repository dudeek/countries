<script lang="ts" setup>
import { useCountriesStore } from "@/stores/countries.store";
import { computed, onMounted } from "vue";
import { ICountry } from "@/types/countries";

const store = useCountriesStore();
const isLoading = computed((): boolean => store.$state.isLoading);
const countriesList = computed((): ICountry[] => store.$state.countriesList);
const countryBasicInfoTitles = [
  {
    title: "Population",
    key: "population",
  },
  {
    title: "Region",
    key: "region",
  },
  {
    title: "Capital",
    key: "capital",
  },
];

onMounted(() => {
  store.getCountriesList();
});
</script>

<template>
  <div class="c-countryBoard">
    <div v-if="!isLoading" class="c-countryBoard__board">
      <div
        v-for="(country, index) in countriesList"
        :key="`${country}-${index}`"
        class="c-countryBoard__country"
      >
        <img
          :alt="`${country.name} flag`"
          :src="country.flags.png"
          class="c-countryBoard__countryFlag"
        />
        <div class="c-countryBoard__countryBasicInfoContainer">
          <h3 class="c-countryBoard__countryName">{{ country.name }}</h3>

          <div
            v-for="(value, index) in countryBasicInfoTitles"
            :key="`${value}-${index}`"
          >
            <span class="c-countryBoard__countryBasicInfoTitle">{{
              `${value["title"]}:`
            }}</span>
            <span>{{ country[value["key"]] }}</span>
          </div>
        </div>
      </div>
    </div>
    <span v-else class="c-countryBoard__loader">LOADING</span>
  </div>
</template>

<style lang="scss" scoped>
.c-countryBoard {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;

  &__board {
    width: 100%;
    padding: 2.5rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }

  &__country {
    box-shadow: var(--shadow);
    border-radius: 0.5rem;
    cursor: pointer;
    overflow: hidden;
  }

  &__countryFlag {
    display: block;
    width: 100%;
    height: 15rem;
    object-fit: cover;
    object-position: center center;
    box-shadow: var(--shadow);
  }

  &__countryBasicInfoContainer {
    padding: 1rem 1.5rem 2rem;
    display: flex;
    flex-direction: column;
  }

  &__countryName {
    padding-bottom: 1rem;
    font-weight: var(--fw-bold);
  }

  &__countryBasicInfoTitle {
    padding-right: 0.5rem;
    font-weight: var(--fw-bold);
  }

  &__loader {
    display: block;
    text-align: center;
    font-size: 20rem;
  }

  span,
  h3 {
    color: var(--text-color);
  }
}
</style>
