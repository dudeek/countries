<script lang="ts" setup>
import MoonIcon from "@/assets/icons/MoonIcon.vue";
import { useTheme } from "@/hooks/theme.hook";

const { themeMode, checkThemeMode, changeThemeMode } = useTheme();

checkThemeMode();
</script>

<template>
  <header class="c-header">
    <div class="c-header__elements-wrapper">
      <RouterLink class="c-header__title" to="/"
        >Where is the world?
      </RouterLink>
      <button class="c-header__theme-container" @click="changeThemeMode()">
        <MoonIcon class="c-header__moon-icon" />
        <span class="c-header__theme-mode-title">{{ themeMode }}</span>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.c-header {
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: var(--header-color);
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;

  &__elements-wrapper {
    margin: 0 auto;
    max-width: 120rem;
    display: flex;
    flex: 1;
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
    stroke: var(--text-color);
    fill: var(--icon-fill);
  }

  &__theme-mode-title {
    width: fit-content;
    font-size: 1.4rem;
    color: var(--text-color);
  }
}
</style>
