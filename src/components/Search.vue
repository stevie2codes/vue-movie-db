<template>
  <div>
    <form @submit.prevent="processInput">
      <input
        type="text"
        v-model="input"
        name="input"
        placeholder="Search a movie title"
      />
      <button type="submit">Enter</button>
    </form>
    <ul>
      <li v-for="(movie, index) in movieResult" :key="index">
        <Movie :movie="movie" />
      </li>
    </ul>
  </div>
</template>

<script>
import Movie from "../components/Movie";
export default {
  name: "Search",
  result: false,

  data() {
    return {
      input: "",
      movieResult: []
    };
  },
  methods: {
    processInput: async function() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=27a97db4259eddae7c5074e18978bd3c&language=en-US&query=${this.input}&page=1&include_adult=true`
        );
        const movieResult = await res.json();
        this.movieResult = movieResult.results;
        console.log(movieResult);
      } catch (err) {
        console.log(err);
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
