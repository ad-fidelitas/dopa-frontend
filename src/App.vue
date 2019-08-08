<template>
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>
 
<script lang="ts">
import store from "@/store";
import Guestlayout from './layouts/Guestlayout.vue';
import Loginlayout from './layouts/Loginlayout.vue';

export default {
  computed: {
    layout () {
      return store.getters.layout
    }
  },
  components: {
    'guest-layout': Guestlayout,
    'login-layout': Loginlayout
  }
}
</script>
