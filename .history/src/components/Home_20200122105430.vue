<template>
  <v-layout row wrap>
    <v-flex xs4 v-for="movie in movies" :key="movie._id">
    <v-card>
    <v-card-title primary-title>
    <div>
    <div class="headline">{{ movie.name }}</div>
    <span class="grey--text">{{ movie.release_year }} ‧ {{
    movie.genre }}</span>
    </div>
    </v-card-title>
    <v-card-text>
    {{ movie.description }}
    </v-card-text>
    </v-card>
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
