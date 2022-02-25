<template>
  <div id="filters-main">
    <div id="filters-content" :class="{ visible: visibleFilters }">
      <p>This is the {{ componentName }} component</p>
      <button class="getCategoryBtn" v-on:click="getPopularMovies">Popular</button>
      <button class="getCategoryBtn" v-on:click="getNowPlayingMovies">Playing now</button>
      <button class="getCategoryBtn" v-on:click="getUpcomingMovies">Upcoming</button>
      <button class="getCategoryBtn" v-on:click="getTopRatedMovies">Top rated</button>
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
import {mapActions} from "vuex";
export default {
  data() {
    return {
      componentName: "Filter",
      visibleFilters: false,
    };
  },
  created(){
    this.getPopularMovies()
  },
  methods: {
    toggleFilters() {
      this.visibleFilters = !this.visibleFilters;
    },
    ...mapActions(["getPopularMovies","getNowPlayingMovies","getUpcomingMovies","getTopRatedMovies"])
  },
};
</script>
