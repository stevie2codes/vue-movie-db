<template>
  <header>
    <router-link to="/">
      <img class="logo" src="../assets/mdb.svg" alt="Mdb logo" />
    </router-link>
    <div class="navLinks">
      <router-link to="/search"><h4>Search</h4></router-link>
      <router-link to="/"><h4>Home</h4></router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  },
  data() {
    return {
      show: false,
      name: "stevo"
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 20px;
  color: #fefefe;
}
.navLinks {
  display: flex;
  flex-direction: row;
}

h4 {
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  padding: 0px 20px;
}
.logo {
  width: 100px;
}
</style>
