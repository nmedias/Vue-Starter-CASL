<template functional>
  <div class="c-widget" v-if="props.item">
    <h3>{{ props.item.title }} | Author ID: {{ props.item.authorID }}</h3>
    <p>{{ props.item.type }}</p>
  </div>
</template>

<script>
import { abilities } from "./mixins/abilities.mixin";

export default {
  name: "Widget",
  mixins: [abilities],
  props: {
    item: {
      validator: prop => typeof prop === "object",
      default: () => null,
      required: true
    }
  }
};
</script>
<style>
.c-widget {
  background: cornsilk;
  max-width: 600px;
  padding: 20px;
  margin: 20px auto;
}
</style>
