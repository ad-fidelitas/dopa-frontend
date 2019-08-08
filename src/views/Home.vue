<template>
<div>
  <Navbar/>
  <HelloWorld />
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import Navbar from '../components/Navbar.vue';
import Jumbo from '../components/Homepage/Jumbo.vue';

export default Vue.extend({
  components: {
    Jumbo,
  },
});
</script>
