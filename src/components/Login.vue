<template>
  <div class="c-login">
    <form @submit.prevent="login(loginAs)" v-if="!canReadRestricted">
      <p>
        <strong>Login As:</strong><br />
        You will always "login" as user with id:1. You will only switch the
        roles.
      </p>

      <span v-for="(role, $index) in Role" :key="$index">
        <input
          type="radio"
          :id="`role_${role}`"
          name="role"
          :value="role"
          v-model="loginAs"
        />
        <label :for="`role_${role}`"> {{ role }}</label>
      </span>

      <p>
        <button>Login</button>
      </p>
    </form>
    <div v-if="canReadRestricted">
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { abilities } from "./mixins/abilities.mixin";
import { Role } from "../services/user-management/role";

export default {
  name: "Login",
  mixins: [abilities],
  data: () => ({
    loginAs: "",
    Role
  }),
  methods: {
    login(role) {
      // todo: fetch data from server ...
      const user = { id: 1, role };
      //set store state (replace with user/fetchUser when getting data from the server)
      this.$store.dispatch("user/setUser", user);
    },
    logout() {
      this.$store.dispatch("user/clearUser");
    }
  }
};
</script>
<style>
.c-login {
  margin: 50px;
}
</style>
