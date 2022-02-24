<template>
  <div id="main-content">
    <TopBar />
    <div id="home-content">
      <Filters />
      <Movies />
    </div>
  </div>
</template>

<script>
import Filters from "./components/FiltersComp.vue";
import Movies from "./components/MoviesComp.vue";
import TopBar from "./components/TopbarComp.vue";

export default {
  name: "App",
  components: {
    Filters,
    Movies,
    TopBar,
  },
};
</script>

<style lang="scss">
@import "@/static/scss/main.scss";
</style>
