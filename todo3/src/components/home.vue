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
            height="150" color= "#C2185B">
            
           <v-row> 
        <v-icon>{{ item.icon }}</v-icon>
        <v-card-title>{{ item.title }}</v-card-title>
</v-row>
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
  font-size: 22px !important
  

.theme--light.v-icon
  padding: 15px
  display: flex
  font-size:32px
  color: white
  justify-content: left !important

.row
 .v-sheet.v-card
   border-radius: 20px
 .row
   align-content: center
   margin: 0px
 .v-card__text
    text-align: center
    color: white !important
    font-size: 40px
    font-weight: bold


</style>