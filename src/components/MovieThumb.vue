<template>
  <div v-if="info">
    <img
      id="movie-thumb-img"
      :src="'https://image.tmdb.org/t/p/w500' + info.poster_path"
      @load="imageLoaded"
    />
    <div id="movie-info-container">
      <div id="movie-info">
        <p>{{ info.title }}</p>
        <button v-on:click="consoleInfo">Console</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    this.getMovieDetails();
  },
  methods: {
    consoleInfo() {
      console.log(this.info.title);
    },
    getMovieDetails() {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.movie.id}?api_key=c40032dade4d1a42e0a2b3b831b512d1`
      )
        .then((response) => response.json())
        .then((data) => (this.info = data));
    },
    imageLoaded() {
      this.$emit("imageLoaded", this.movie.id);
    },
  },
};
</script>
