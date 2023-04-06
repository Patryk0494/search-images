<script setup lang="ts">
import { ref, reactive } from "vue";

interface Image {
  urls: {
    small: string;
  };
  alt_description: string;
}

const state = reactive<{ images: Image[]; searchQuery: string }>({
  images: [],
  searchQuery: "",
});
// const searchQuery = ref("");

const onSearchButtonClick = async () => {
  const { searchQuery: query } = state;
  const clientId = import.meta.env.VITE_CLIENT_ID;
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?client_id=${clientId}&page=1&query=${query}`
    );
    const { results } = await response.json();
    state.images = results;
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <div class="container">
    <div>
      <div class="search-bar">
        <input type="text" v-model="state.searchQuery" />
        <button @click="onSearchButtonClick">wyszukaj</button>
      </div>
      <h2>wyszukujesz: {{ state.searchQuery.toLocaleUpperCase() }}</h2>
    </div>
    <div v-for="{ urls, alt_description } in state.images">
      <img :src="urls.small" :alt="alt_description" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
}
.search-bar {
  display: flex;
  gap: 20px;
}
</style>
