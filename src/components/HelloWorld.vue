<template class='foo'>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs4>
          <h2 align-center justify-center class="font-weight-bold">CARD HERE</h2>
          <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="400"></v-img>
        </v-flex>

        <v-flex xs2>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div>
                <div class="headline">Card options</div>
                <span>Edit Options Here</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark>Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
</style>