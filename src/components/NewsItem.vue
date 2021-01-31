<template>
  <v-col cols="12" sm="4" >
    <v-card>
      <v-img
        :src="image"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title v-text="title"></v-card-title>
      </v-img>
      <v-card-text>
        <p>
          <slot></slot>
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn plain color="deep-purple" v-bind:href="link" target="_blank">
          <v-icon class="mr-4">mdi-link-variant</v-icon>Читать в источнике
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>

export default{
  name:'NewsItem',
  props: ['image', 'link', 'title']
}
</script>