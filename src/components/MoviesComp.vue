<template>
  <div id="movies-main">
    <div id="movie-card" v-for="(movie, index) in moviesToDisplay" :key="index">
      {{movie}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    moviesToDisplay() {
      return this.$store.getters.getAllMovies;
    },
  },
};
</script>
