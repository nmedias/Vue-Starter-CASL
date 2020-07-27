<template>
  <div class="p-profile">
    <h1>This the Profile View.</h1>
    <p>
      DEVELOPER | DESIGNER | ADMIN are allowed to access this view. They can
      only see their own view according to their user id.
    </p>
    <p>User Id: {{ user.id }} | User Role: {{ user.role }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters({ user: "user/user" })
  }
};
</script>
