<template>
  <v-layout row wrap px-3>
    <v-flex xs6 sm6 md4 lg4 px-3 py-3 v-for="movie in movies" :key="movie._id">
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="title">
              {{ movie.name }}
            </div>
            <span class="grey--text subtitle-2">{{ movie.release_year }} ‧ {{
            movie.genre }}</span>
          </div>
        </v-card-title>
        <v-card-text>
        {{ movie.description }}
        </v-card-text>
        <v-card-text>
        <v-btn amber darken-4 text v-bind:to="`/movies/${movie._id}`">
          Rate Movie
        </v-btn>
        </v-card-text>

      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      return axios({
        method: 'get',
        url: 'http://localhost:8081/movies',
      })
        .then((response) => {
          this.movies = response.data.movies;
        })
        .catch(() => {
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
