<template>
    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 1"
            :key="n"
            cols="4"
            class="mt-8"
          >
            <v-card height="200" color= "#C2185B"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>