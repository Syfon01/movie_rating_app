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
    };
  },
  methods: {
    async submit() {
      return axios({
        method: 'post',
        data: {
          email: this.email,
          password: this.password,
        },
        url: 'http://localhost:8081/users/login',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          window.localStorage.setItem('auth', response.data.token);
this.$swal('Great!', 'You are ready to start!', 'success');
this.$router.push({ name: 'Home' });
})
.catch((error) => {
const message = error.response.data.message;
this.$swal('Oh oo!', `${message}`, 'error');
this.$router.push({ name: 'Login' });
});
},
clear() {
this.$refs.form.reset();
},
},
};
</script>
