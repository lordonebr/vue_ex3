<template>
  <div>
    <h1>Usuário de ID = {{ $route.params.id }}</h1>
    <p class="title">
      Nome:
      <span class="text1">{{user.name}}</span>
    </p>
    <p class="title">
      Email:
      <span class="text1">{{user.email}}</span>
    </p>
    <p class="title">
      Bio:
      <span class="text1">{{user.bio}}</span>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserRoute",
  computed: {
    userId() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      user: axios
        .get("https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d​")
        .then(
          response =>
            (this.user = response.data.results.find(
              u => u.id.toString() === this.$route.params.id
            ))
        )
    };
  }
};
</script>

<style scoped>
.title {
  font-weight: bold;
}
.text1 {
  font-weight: normal;
}
</style>