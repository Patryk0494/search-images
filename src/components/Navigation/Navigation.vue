<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation-list-item" v-for="{ path, name } in navigation">
        <router-link :to="path">{{ name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import "./styles.scss";
import ROUTING_URLS from "../../router/routings";

const navigation = [
  { path: ROUTING_URLS.MAIN_PAGE, name: "Strona główna" },
  { path: ROUTING_URLS.ABOUT, name: "O nas" },
];
</script>
