<template>
  <form @submit.prevent="processInput">
    <input
      type="text"
      v-model="input"
      name="input"
      placeholder="Search a movie title"
    />
    <button type="submit">Enter</button>
    <p>input is: {{ input }}</p>
  </form>
</template>

<script>
export default {
  name: "Search",

  data() {
    return {
      input: ""
    };
  },
  methods: {
    processInput: async function() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=27a97db4259eddae7c5074e18978bd3c&language=en-US&query=${this.input}&page=1&include_adult=false`
        );
        const movieResult = await res.json();
        this.movieResult = movieResult;
        console.log(movieResult);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  color: white;
}
</style>
