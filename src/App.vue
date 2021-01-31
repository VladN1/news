<template>
  <v-app>

    <v-app-bar color="deep-purple" dark app>
      <v-app-bar-nav-icon
        v-on:click="navigation = !navigation"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Самые свежие новости</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="navigation" absolute temporary>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title"> Sandra Adams </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link to="/ru">
          <v-list-item-title>Российская Федерация</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/us">
          <v-list-item-title>United States of America</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  <v-main app>
    <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    navigation: false,
  })
};
</script>
