<template>
  <div>
    <h1>In Theatres</h1>
    <ul>
      <li v-for="(movie, index) in movies" :key="index">
        <Movie :movie="movie" />
      </li>
    </ul>
  </div>
</template>

<script>
import Movie from "./Movie.vue";
export default {
  name: "MoviesList",

  data() {
    return {
      movies: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-07-01&primary_release_date.lte=2020-08-01&api_key=27a97db4259eddae7c5074e18978bd3c"
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

button {
  padding: 10px 25px;
  background: #f3f3f3;
  border: none;
  border-radius: 10px;
}

.overview {
  max-width: 300px;
}
</style>
