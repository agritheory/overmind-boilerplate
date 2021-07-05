<template>
  <h2>Nested Page</h2>
  <p> I'm a Nested Page </p>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { hooks } from "../overmind";

export default defineComponent({
  name: "NestedPage",
  setup() {
     const state = hooks.state();
     return {state}
  },
})
</script>