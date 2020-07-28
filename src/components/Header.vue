<template>
  <header>
    <h1>{{ newTitle }}</h1>
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
      name: "stevo"
    };
  },
  computed: {
    newTitle: function() {
      return this.title;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color: #b44040;
  padding: 20px;
  color: #fefefe;
}
h1 {
  margin: 0;
}
</style>
