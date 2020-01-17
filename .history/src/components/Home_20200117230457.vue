<template>
  <v-layout row wrap>
    <v-card>
<v-card-title primary-title>
<div>
<div class="headline">Batman vs Superman</div>
<span class="grey--text">2016 ‧ Science fiction film/Action
fiction ‧ 3h 3m</span>
</div>
</v-card-title>
<v-card-text>
It's been nearly two years since Superman's (Henry Cavill)
colossal battle with Zod (Michael Shannon) devastated the city of
Metropolis. The loss of life and collateral damage left many feeling angry
and helpless, including crime-fighting billionaire Bruce Wayne (Ben
Affleck). Convinced that Superman is now a threat to humanity, Batman
embarks on a personal vendetta to end his reign on Earth, while the
conniving Lex Luthor (Jesse Eisenberg) launches his own crusade against the
Man of Steel.
</v-card-text>
<v-card-actions>
<v-btn flat color="purple">Rate this movie</v-btn>
<v-spacer></v-spacer>
</v-card-actions>
</v-card>
</v-flex>
<v-flex xs4>
<v-card>
<v-card-title primary-title>
<div>
<div class="headline">Logan</div>
<span class="grey--text">2017 ‧ Drama/Science fiction film ‧ 2h
21m</span>
</div>
</v-card-title>
<v-card-text>
In the near future, a weary Logan (Hugh Jackman) cares for an
ailing Professor X (Patrick Stewart) at a remote outpost on the Mexican
border. His plan to hide from the outside world gets upended when he meets
a young mutant (Dafne Keen) who is very much like him. Logan must now
protect the girl and battle the dark forces that want to capture her.
</v-card-text>
<v-card-actions>
<v-btn flat color="purple">Rate this movie</v-btn>
<v-spacer></v-spacer>
</v-card-actions>
</v-card>
</v-flex>
<v-flex xs4>
<v-card>
<v-card-title primary-title>
<div>
<div class="headline">Star Wars: The Last Jedi</div>
<span class="grey--text">2017 ‧ Fantasy/Science fiction film ‧
2h 35m</span>
</div>
</v-card-title>
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
