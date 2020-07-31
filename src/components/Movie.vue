<template>
  <router-link :to="moviePath">
    <img :src="posterImage" :alt="movie.title" @error="imgPlaceHolder" />
  </router-link>
</template>

<script>
const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
export default {
  props: ["movie"],
  computed: {
    posterImage: function() {
      const poster = `${POSTER_PATH}/${this.movie.poster_path}`;
      return poster;
    },
    moviePath: function() {
      return `/movie/${this.movie.id}`;
    }
  },
  methods: {
    imgPlaceHolder: function(e) {
      e.target.src =
        "https://dummyimage.com/154x230/000000/ededed.png&text=Image+unavailable+:(";
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  box-shadow: 0 0 35px black;
}
</style>
