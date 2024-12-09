<template>
  <v-app>
    <NavBar/>
    <keep-alive>
        <router-view style="margin-top:30px;"></router-view>
      </keep-alive>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',

  components: {
NavBar
  },
};
</script>
