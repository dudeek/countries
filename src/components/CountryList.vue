<script lang="ts" setup>
import CountryBoard from "@/components/CountryBoard.vue";
</script>

<template>
  <div class="v-countries-list">
    <CountryBoard />
  </div>
</template>

<style lang="scss" scoped>
.v-countries-list {
  height: 100vh;
  padding: 6.4rem 0;
  background-color: var(--background-color);
}
</style>
