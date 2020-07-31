<template>
  <header>
    <h1>
      <router-link to="/">
        <img class="logo" src="../assets/mdb.svg" alt="Mdb logo" />
      </router-link>
    </h1>
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
  background-color: transparent;
  padding: 20px;
  color: #fefefe;
}
h1 {
  margin: 0;
}
.logo {
  width: 100px;
}
</style>
