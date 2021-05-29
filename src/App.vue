<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";

export default {
  name: "App",
  components: {
    navbar: Navbar,
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}
</style>
