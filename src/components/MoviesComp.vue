<template>
  <div id="movies-main">
    <MovieThumb id="movie-card" v-for="(movie, index) in theMovies" :key="index" :movie="movie" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import MovieThumb from "./MovieThumb.vue";

export default {
  components: { MovieThumb },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ theMovies: "getAllMovies" }),
  },
  methods: {
  },
};
</script>
