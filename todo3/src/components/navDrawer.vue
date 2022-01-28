<template>
      <v-card
       class="mx-auto overflow-hidden"
      >


   <v-navigation-drawer
      
       v-model="drawer"
      permanent
      :mini-variant.sync="mini"
      app
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="data:image/png;base64,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"></v-img>
        </v-list-item-avatar>

        <v-list-item-title 
        >Bkash</v-list-item-title>

        <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
export default {
data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
      }
    },
}
</script>