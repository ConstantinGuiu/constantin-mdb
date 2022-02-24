<template>
  <div id="filters-main">
    <div id="filters-content" :class="{ visible: visibleFilters }">
      <p>This is the {{ componentName }} component</p>
      <button id="getPopularBtn" v-on:click="getPopular">Get Popular</button>
      <button
        id="hide-filters"
        :class="{ rotate: visibleFilters }"
        v-on:click="toggleFilters"
      >
        <span class="material-icons">close</span>
      </button>
    </div>
    <button id="show-filters" v-on:click="toggleFilters">
      <span class="material-icons">filter_alt</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentName: "Filter",
      visibleFilters: false,
    };
  },
  methods: {
    toggleFilters() {
      this.visibleFilters = !this.visibleFilters;
    },
    getPopular() {
      this.$store.dispatch("getPopularMovies");
    },
  },
};
</script>
