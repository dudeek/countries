<script lang="ts" setup>
import { useCountriesStore } from "@/stores/countries.store";
import { computed, onBeforeMount } from "vue";

const store = useCountriesStore();
const isLoading = computed(() => store.isLoading);
const countriesList = computed(() => store.countriesList);
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

onBeforeMount(() => {
  store.getCountriesList();
});
</script>

<template>
  <div class="c-countryBoard">
    <div v-if="!isLoading" class="c-countryBoard__board">
      <div
        v-for="country in countriesList"
        :key="country.name"
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
    <div v-else class="c-countryBoard__loader">LOADING</div>
  </div>
</template>

<style lang="scss" scoped>
.c-countryBoard {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;

  &__board {
    padding: 2.5rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 27rem);
    gap: 4rem;
    justify-content: center;
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
    object-position: center;
    box-shadow: var(--shadow);
  }

  &__countryBasicInfoContainer {
    padding: 1rem 1.5rem 2rem;
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
    text-align: center;
    font-size: 20rem;
  }

  p,
  span,
  h3 {
    color: var(--text-color);
  }
}
</style>
