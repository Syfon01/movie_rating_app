<template>
<v-card  max-width="500px" class="p-5 mx-auto">
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Email"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="password"
      required
    ></v-text-field>
    <v-btn
      @click="submit"
      :disabled="!valid"
    >
    submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</v-card>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      valid: true,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid',
        ],
    }
  },
};
</script>
