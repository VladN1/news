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
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>My Files</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-row>

          <news-item v-for="(item, i) in news" v-bind:key="i"
            v-bind:image="item.urlToImage"
            v-bind:link="item.url"
            v-bind:title="item.title"
          >
            {{ item.description }}
          </news-item>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NewsItem from './components/NewsItem.vue'
export default {
  name: "App",
  components: {
    NewsItem
  },
  data: () => ({
    navigation: false,
    news: []
  }),
  methods: {
    getNews() {
      this.axios({
        method: "GET",
        url:
          "https://newsapi.org/v2/top-headlines?country=ru&apiKey=d7f41a32c26b4bbfb596d58b1a54c766",
      }).then((response) => {
        this.news = response.data.articles;
      });
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>
