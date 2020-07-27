import Vue from "vue";
import VueRouter from "vue-router";
import { abilities } from "@/services/user-management";
import store from "../store";

import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/manager",
    name: "Manager",
    component: () =>
      import(/* webpackChunkName: "guest" */ "../views/Manager.vue"),
    meta: {
      requiresAuth: "ManagerVIEW"
    }
  },
  {
    path: "/profile/:id",
    name: "UserProfile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/Profile.vue"),
    meta: {
      requiresAuth: "UserProfileVIEW"
    }
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const storedUser = JSON.parse(localStorage.getItem("vue-casl/user"));

  if (storedUser && !store.state.user.value) {
    //set again to store
    store.dispatch("user/setUser", storedUser);
  }

  if (to.meta.requiresAuth) {
    const subject = {
      type: to.meta.requiresAuth,
      ...to.params
    };

    const authenticated = abilities.can("read", subject);

    if (!authenticated) {
      //login, 404, whatever
      return next("/404");
    }
  }
  next();
});

export default router;
