<template>
  <div>
    <form @submit.prevent="processInput">
      <input
        type="text"
        v-model="input"
        name="input"
        placeholder="Search a movie title"
      />
      <button type="submit">
        <v-icon name="search" class="searchIcon" />
      </button>
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
          `https://api.themoviedb.org/3/search/movie?api_key=27a97db4259eddae7c5074e18978bd3c&append_to_response=images&language='en'&query=${this.input}&page=1&include_adult=true`
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
button {
  background: transparent;
  border: none;
  position: absolute;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border: none;
  }
}
input {
  position: relative;
  padding: 15px;
  width: 280px;
  border-radius: 10px;
  border: none;
  text-align: center;
  box-shadow: 0 5px 10px var(--green), 0 0 0 5px #ffffffeb;
  background-color: #77cf8e;
  font-size: 1.2rem;
  outline: none;
}

.searchIcon {
  width: 34px;
  color: white;
}
</style>
