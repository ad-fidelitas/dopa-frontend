<template>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h2 class="ok">Ready to start committing to your goals?</h2>
          <span class="subheading"></span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Try us out!</div>
          <h3>I commit to: </h3>
          <v-select
          :items="items"
          :menu-props="{ maxHeight: '400' }"
          label="Select"
          multiple
          hint="Pick the type of goal"
          persistent-hint
        ></v-select>
        <v-btn><router-link to="/register"><b>Go</b></router-link></v-btn>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Jumbo',
  data: () => ({
    items: [
    'Get fit',
    'Lose weight',
    'Study more',
    'Quit smoking',
    'Spend less',
    'Work more',
  ],
  }),
});
</script>

<style scoped>
.ok{
  font-size: 35px;
  color: white;
}
</style>
