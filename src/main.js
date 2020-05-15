import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import AboutRoute from "./components/AboutRoute";
import UsersRoute from "./components/UsersRoute";
import UserRoute from "./components/UserRoute";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/about",
      component: AboutRoute
    },
    {
      path: "/users",
      component: UsersRoute
    },
    {
      path: "/users/:id",
      component: UserRoute
    }
  ]
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
