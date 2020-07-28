<template>
  <ul>
    <li v-for="(movie, index) in movies" :key="index">
      <Movie :movie="movie" />
    </li>
  </ul>
</template>

<script>
import Movie from "./Movie.vue";
export default {
  name: "MoviesList",
  created: function() {
    this.fetchData();
  },
  data() {
    return {
      movies: []
    };
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc/movie&api_key=27a97db4259eddae7c5074e18978bd3c"
        );
        const movies = await res.json();
        this.movies = movies.results;
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {
    Movie
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: center;
}
li {
  margin: 20px;
}
</style>
