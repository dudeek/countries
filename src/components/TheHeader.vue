<script lang="ts" setup></script>

<template>
  <header>
    <RouterLink to="/">Where in the world?</RouterLink>
    <div>
      <MoonIcon />
      <span>Dark Mode</span>
    </div>
  </header>
</template>

<script>
import MoonIcon from "@/assets/icons/MoonIcon";

export default {
  components: { MoonIcon },
};
</script>

<style scoped></style>
