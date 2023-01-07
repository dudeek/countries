<script lang="ts" setup>
import MoonIcon from "@/assets/icons/MoonIcon.vue";
import { ECountriesMode } from "@/types/countries";
import type { Ref } from "vue";
import { computed, ref } from "vue";

const themeMode: Ref<ECountriesMode> = ref(ECountriesMode.LIGHT_MODE);
const themeModeTile = computed(() =>
  themeMode.value === ECountriesMode.LIGHT_MODE ? "Light Mode" : "Dark Mode"
);

const changeTheme = () => {
  themeMode.value === ECountriesMode.LIGHT_MODE
    ? (themeMode.value = ECountriesMode.DARK_MODE)
    : (themeMode.value = ECountriesMode.LIGHT_MODE);

  document.querySelector(":root")?.classList.toggle("dark-theme");
};
</script>

<template>
  <header class="c-header">
    <div class="c-header__elements-wrapper">
      <RouterLink class="c-header__title" to="/"
        >Where is the world?
      </RouterLink>
      <button class="c-header__theme-container" @click="changeTheme()">
        <MoonIcon class="c-header__moon-icon" />
        <span class="c-header__theme-mode-title">{{ themeModeTile }}</span>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.c-header {
  height: 8.2rem;
  background-color: var(--header-color);
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;

  &__elements-wrapper {
    margin: 0 auto;
    padding: 0 3.2rem;
    width: 124rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 1.4rem;
    text-decoration: none;
    color: var(--text-color);
    font-weight: var(--fw-bold);
  }

  &__theme-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__moon-icon {
    height: 1.4rem;
    width: 1.4rem;

    :deep(path) {
      stroke: var(--text-color);
      fill: var(--icon-fill);
    }
  }

  &__theme-mode-title {
    width: max-content;
    font-size: 1.4rem;
    color: var(--text-color);
  }
}
</style>
