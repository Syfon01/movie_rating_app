<template>
  <v-layout row wrap>
    <v-card>
<v-card-title primary-title>
<div>
<div class="headline">Batman vs Superman</div>
<span class="grey--text">2016 ‧ Science fiction film/Action
fiction ‧ 3h 3m</span>
</div>
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
