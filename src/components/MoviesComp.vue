<template>
  <div id="movies-main">
    <div v-if="loaded">Is fetching</div>
    <MovieThumb id="movie-card" v-for="(movie, index) in theMovies" :key="index" :movie="movie" @imageLoaded="imageLoaded" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import MovieThumb from "./MovieThumb.vue";

export default {
  components: { MovieThumb },
  data() {
    return {
      loaded: false,
      loadedImages: []
    };
  },
  watch: {
    theMovies(){
      this.loadedImages = []
    },
    loadedImages() {
      let loaded = true;
      this.theMovies.forEach(movie => {
        if(this.loadedImages.indexOf(movie.id) < 0) {
          loaded = false
        }        
      });
      this.allLoaded = loaded;
    }
  },
  computed: {
    ...mapGetters({ theMovies: "getAllMovies", isFetching: "getFetching"}),
  },
  methods: {
    imageLoaded(val) {
      this.loadedImages.push(val);
    }
  },
};
</script>
