<template>
  <div class="c-dashboard">
    <h1>Hello {{ user && user.role ? user.role : "Everyone" }}</h1>

    <Login />

    <div v-if="canReadRestricted">
      LOGGED IN,
      <strong
        >USER ID: {{ user.id }} | ROLE:
        {{ user.role ? user.role : "User" }}</strong
      >
    </div>

    <Widget v-for="item in data" :key="item.id" :item="filterByType(item)" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Widget from "@/components/Widget";
import Login from "@/components/Login";
import { abilities } from "./mixins/abilities.mixin";

export default {
  name: "Dashboard",
  mixins: [abilities],
  components: {
    Widget,
    Login
  },
  props: {
    msg: String
  },
  data: () => ({
    data: [
      {
        id: 783918,
        type: "UserPostType",
        title: "Content for All Logged in Users",
        authorID: 2
      },
      {
        id: 986657,
        type: "ManagerPostType",
        title: "Content for Managers only",
        authorID: 1
      },
      {
        id: 456546456,
        type: "DeveloperPostType",
        title: "Content for Developers only",
        authorID: 1
      }
    ]
  }),
  methods: {
    filterByType(item) {
      return this.canReadData(item) ? item : null;
    }
  },
  computed: {
    ...mapGetters({
      user: "user/user"
    })
  }
};
</script>
