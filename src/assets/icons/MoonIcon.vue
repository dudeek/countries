<script lang="ts" setup></script>

<template>
  <svg
    class="c-moonIcon"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Moon</title>
    <path
      class="c-moonIcon__path"
      d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
  </svg>
</template>

<style lang="scss" scoped>
.c-moonIcon {
  &__path {
    fill: var(--icon-fill, var(--white));
    stroke: var(--text-color, var(--text-black));
  }
}
</style>
