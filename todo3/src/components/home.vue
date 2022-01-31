<template>
    <v-main>
      <v-container>
        <v-row>
          <v-col
            cols="4"
            class="mt-8"

            v-for="(item, i) in items"
            :key="i"
          >
            <v-card 
            elevation="3"
            hover
            rounded
            height="200" color= "#C2185B">
            
          
            <v-card-title>{{ item.title }}</v-card-title>
            <v-icon>{{ item.icon }}</v-icon>
           <v-card-text>{{ item.number}}</v-card-text>
            
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>


export default {

data () {
  
      return {

        items: [
          { title: 'Home', icon: 'mdi-home-city', number: '1500' },
          { title: 'My Account', icon: 'mdi-account' , number: '3500'},
          { title: 'Users', icon: 'mdi-account-group-outline', number: '1980' },
         
        ],

      }
    },
}
</script>

<style lang="sass">
.v-card__title
  color: white
  font-size: 28px !important
  text-align: justify-center !important

.theme--light.v-icon
  display: flex
  font-size: 50px
  color: white
  justify-content: center !important
</style>