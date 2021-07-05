<template>
  <h1>Page</h1>
  <p>I'm a web page. Hopefully you've see one of these before.</p>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { hooks } from "../overmind";

export default defineComponent({
  name: "Page",
  setup() {
     const state = hooks.state();
     return {state}
  },
})
</script>

