<template>
    <v-card class="overflow-hidden">
    <v-app-bar
      app
      absolute
      color="#e21d6f"
      dark
      shrink-on-scroll
      prominent
      src="https://i.imgur.com/Iko3cBX.jpeg"
      height= '100px'
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(226, 29, 111, 1), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-title
       
      > <h2>Bkash</h2>  </v-app-bar-title>
      <v-spacer></v-spacer>
         <v-app-bar-title
       
      > <h2 >dotkom</h2>  </v-app-bar-title>
       <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
 
}
</script>