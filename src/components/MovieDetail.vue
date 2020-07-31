<template>
  <div class="movie-wrapper">
    <div class="poster" :style="styles"></div>
    <div class="movieInfo">
      <h1>{{ movie.title }}</h1>
      <h3>Relase Date: {{ movie.release_date }}</h3>
      <h3>Rating: {{ this.movie.vote_average }}/10</h3>
      <h5>Overview:</h5>
      <p>{{ movie.overview }}</p>
      <h6>Runtime: {{ this.movie.runtime }} minutes</h6>
    </div>
  </div>
</template>

<script>
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w400";
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
        background: `url(${BACKDROP_PATH}/${this.movie.poster_path}) no-repeat`
      };
    }
  },
  methods: {
    fetchData: async function() {
      try {
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
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.poster {
  width: 380px;
  height: 600px;
  margin: 10px;
  border-radius: 3px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  background-size: cover;
}
h5 {
  margin-bottom: 0;
  border-bottom: 1px solid #222;
  padding: 10px;
}
.movieInfo {
  padding: 2rem 5%;
  background: linear-gradient(
    300deg,
    rgba(144, 206, 161, 1) 50%,
    rgba(1, 180, 228, 1) 100%
  );
  color: #222;
  opacity: 0.9;
  width: 350px;
  margin: 10px;
  border-radius: 3px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  text-align: left;
}
</style>
