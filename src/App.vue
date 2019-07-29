<template>
  <div class="bg">
  <Navbar/>
    <v-content>
      <Home/>
    </v-content>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Navbar,
    Home,
  },
});
</script>

<style scoped>
.bg{
  background-image: url('./assets/image/home_bg.jpg');
  background-size: cover;
  min-height: 1000px;
}
</style>
