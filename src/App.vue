<template>
  <div id="app">
    <Header :title="title" />
    <MoviesList />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MoviesList from "./components/MoviesList.vue";

export default {
  name: "App",
  components: {
    Header,
    MoviesList
  },
  data() {
    return {
      hello: "you homie what it do?",
      title: "Vue Movie DB",
      isTrue: true
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fefefe;
}
</style>
