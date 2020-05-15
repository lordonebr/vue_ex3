<template>
  <div class="title">
    <router-link class="link" to="/">
      <h1>{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String
  }
};
</script>

<style scoped>
.title {
  border: 3px solid black;
  border-radius: 8px;
  padding: 5px 20px 5px;
  background: green;
  text-transform: uppercase;
  font-weight: bold;
}
.link {
  color: black;
  text-decoration: none;
}
</style>
