<template>
  <v-layout>
    <v-flex xs12>
    <h1>{{msg}}</h1>
    <v-flex xs12>
      <v-btn color="primary" v-on:click="reply">Reply</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'How are you',
    };
  },
  methods: {
    reply() {
      this.msg = "I'm doing great. Thank You!";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
