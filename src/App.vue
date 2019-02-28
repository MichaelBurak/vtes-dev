<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <span>V</span>
        <span class="font-weight-light">CUSTOM CARDS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <span class="mr-2">Development Version</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
* {
  color: var(--v-primary-base);
  background-color: var(--v-secondary-base);
}
</style>
