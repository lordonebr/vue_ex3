<template>
  <div class="divUsers">
    <h1 class="titleSection">Lista de usuários</h1>
    <h3>Selecione um usuário abaixo para mais detalhes</h3>
    <ul class="listUsers">
      <li v-for="(user,index) in users" :key="index" class="listItemUser">
        <router-link
          class="listLinkuser"
          :to="{ path: 'users/'+ user.id}"
        >{{user.name}} (Email: {{user.email}})</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UsersRoute",
  data() {
    return {
      users: axios
        .get("https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d​")
        .then(response => (this.users = response.data.results))
    };
  }
};
</script>

<style scoped>
.divUsers {
  margin: 0px 20px 0px;
}
.titleSection {
  text-transform: uppercase;
}
.listUsers {
  list-style-type: none;
}
.listItemUser {
  margin: 20px 0px 0px;
}
.listLinkuser {
  color: black;
  font-size: 18px;
}
</style>