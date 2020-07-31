import Vue from "vue";
import Router from "vue-router";
import MoviesList from "./components/MoviesList.vue";
import MovieDetail from "@/components/MovieDetail";
import Search from "./components/Search.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Movies List",
      component: MoviesList
    },
    {
      path: "/movie/:id",
      name: "Movies Detail",
      component: MovieDetail
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    }
  ]
});
