<template>
  <div id="app">
    <TitleComponent title="Exercício 3"/>
    <ul class="listMenu">
      <li class="listItemMenu">
        <router-link class="listItemLink" to="/users">Lista de usuários</router-link>
      </li>
      <li class="listItemMenu">
        <router-link class="listItemLink" to="/about">Sobre</router-link>
      </li>
    </ul>
    <router-view/>
    <p class="footer">Feito em VUE</p>
  </div>
</template>

<script>
import TitleComponent from "./components/TitleComponent";

export default {
  name: "App",
  components: {
    TitleComponent
  }
};
</script>

<style scoped>
.listMenu {
  border: 3px solid black;
  border-radius: 8px;
  padding: 5px 20px 5px;
  background: green;
}
.listItemMenu {
  display: inline;
  margin: 0px 10px;
}
.listItemLink {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
}
.listItemLink:hover {
  color: black;
  font-weight: bold;
}
.footer {
  margin: 50px 0px 0px;
  font-size: 12px;
}
</style>
