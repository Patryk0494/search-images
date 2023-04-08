<script setup lang="ts">
import Navigation from "./components/Navigation/Navigation.vue";
</script>

<template>
  <div class="page">
    <navigation />
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100svw;
  height: 100svh;
  padding-top: 80px;
}
</style>
