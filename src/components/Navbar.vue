<template>
<div>
    <v-spacer></v-spacer>
    <v-toolbar flat class="transparent">
      <v-toolbar-title class="title">D O P A</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="sizeup secondary rounded-corners" text>How it Works</v-btn>
        <v-btn class="sizeup secondary rounded-corners" text>About Us</v-btn>
        <v-btn class="sizeup secondary rounded-corners" text>Help Center</v-btn>
        <v-btn round class="signin secondary" text>Login</v-btn>
        <v-btn class="signin secondary dark" text>Register</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</div>
</template>
<script>

export default {
    name: 'Navbar',
  };
</script>
<style scoped>
.title {
  font-size: 30px;
  color: white;
  font-style: bold;
}
.transparent_bg{
  background-color: transparent !important;
}
.transparent{
  background-color: transparent!important;
  /* opacity: 0.1; */
  border-color: transparent!important;
}
.rounded-corners{
  border-radius: 10px;
}
.sizeup{
  font-size: 20px;
}
.signin{
  font-size: 25px;
  color: black;
}

</style>
