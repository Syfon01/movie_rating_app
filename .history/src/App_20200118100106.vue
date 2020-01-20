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
            <v-list-item-content>Home</v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name: 'contact' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>contact_mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>Contact</v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" dark fixed app>
       <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white"></v-app-bar-nav-icon>
          <v-toolbar-title>Home</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text v-bind:to="{ name: 'AddMovie' }">Add Movie</v-btn>
          </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <div id="app">
          <router-view/>
        </div>
      </v-container>
    </v-content>
    <v-footer color="indigo" app class="text-center">
      <span class="white--text">&copy; Sifon Isaac 201</span>
    </v-footer>
  </v-app>
</template>

<script>
import './assets/stylesheets/main.css';

export default {
  name: 'App',
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>

<style>

</style>
