<template>
  <v-app id="inspire">
    <v-navigation-drawer
    fixed
    v-model="drawer"
    app
    >
      <v-list dense>
        <router-link v-bind:to="{ name: 'home' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-content v-model="title">Home</v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name: 'contact' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>contact_mail</v-icon>
            </v-list-item-action>
            <v-list-item-content v-model="title">Contact</v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" dark fixed app>
       <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white"></v-app-bar-nav-icon>
  </v-app>
</template>

<script>
import './assets/stylesheets/main.css';

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    title: '',
  }),
  props: {
    source: String,
  },
};
</script>

<style>

</style>
