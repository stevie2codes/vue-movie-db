<template>
  <div class="movie-wrapper" :style="styles">
    <div class="movieInfo">
      <h1>{{ movie.title }}</h1>
      <h3>{{ movie.release_date }}</h3>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";
export default {
  data() {
    return {
      movie: {}
    };
  },
  created: function() {
    this.fetchData();
  },
  computed: {
    styles() {
      return {
        background: `url(${BACKDROP_PATH}/${this.movie.backdrop_path}) no-repeat`
      };
    }
  },
  methods: {
    fetchData: async function() {
      try {
        let params = this.$route.params.id;
        console.log(params);
        const res = await fetch(
          ` https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=27a97db4259eddae7c5074e18978bd3c`
        );
        const movie = await res.json();
        this.movie = movie;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.movie-wrapper {
  position: relative;
  padding-top: 50vh;
  background-size: cover;
}
.movieInfo {
  padding: 2rem 10%;
  background: white;
  color: #222;
  opacity: 0.9;
}
</style>
