<template>
  <b-navbar variant="dark" type="dark" sticky>
    <b-navbar-nav tabs fill class="mx-auto">
      <b-nav-item :active="tab==1" href="#intro" @click="redirect('/intro'); tab = 1"
        >Introdução</b-nav-item
      >
      <b-nav-item :active="tab==2" href="#analysis" @click="redirect('/analysis'); tab = 2"
        >Análise exploratória dos dados</b-nav-item
      >
      <b-nav-item :active="tab==3" href="#conclusion" @click="redirect('/conclusion'); tab = 3"
        >Conclusões</b-nav-item
      >
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return {
      tab: 1,
    }
  },
  methods: {
    redirect: function (path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style>
</style>