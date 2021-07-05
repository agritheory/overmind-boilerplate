<template>
  <div class="flex justify-center">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
    <ul>
    <li
      v-for="(route, index) in state.routes"
      :key="index"
    >
      <router-link 
        :to="{...route}"
      >
        {{ route.title }}
      </router-link>
    </li>
  </ul>
  <hr>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { hooks } from "./overmind"

export default defineComponent({
  name: 'App',
  setup(){
    const state = hooks.state();
    return {state}
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
