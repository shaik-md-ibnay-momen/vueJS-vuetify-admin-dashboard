<template>
    <v-main class="backgroundimage">
      <v-container class="ml-11 rowsize">
        <v-row>
          <v-col
            cols="4"
            class="mt-8 cardsize"
            v-for="(item, i) in items"
            :key="i"
            
          >
            <v-card 
               color= "#C2185B">     
           <v-row> 
        <v-icon>{{ item.icon }}</v-icon>
        <v-card-title>{{ item.title }}</v-card-title>
</v-row>
           <v-card-text><animnum/></v-card-text>
            
            </v-card>
          </v-col>
        
          <v-container class="graphcontainer">
            <v-row class="row1 pb-3">
              <div class="div1 pr-3"><graph-4/></div>
              <div class="div1 pl-3 pr-3"><graph2/></div>
               <div class="div1 pl-3"><graph3/></div>
            </v-row>
                 
    
              
               </v-container>
             </v-row>
              
         </v-container>
      
    </v-main>
</template>

<script>


import graph2 from './graph2.vue'
import graph3 from './graph3.vue'
import graph4 from './graph4.vue'
import animnum from './animatednumber.vue'

export default {
components: { graph2, graph3, graph4, animnum},
data () {
  
      return {

        items: [
          { title: 'Home', icon: 'mdi-home-city', number: '1500' },
          { title: 'My Account', icon: 'mdi-account' , number: '3500'},
          { title: 'Users', icon: 'mdi-account-group-outline', number: '1980' },
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
   padding-bottom: 20px  
 .row
   align-content: center
   margin: 0px
   
 .v-card__text
    text-align: center
    color: white !important
    font-size: 40px
    font-weight: bold
.backgroundimage
    background: url('../assets/aiback.jpg') center center fixed !important
    background-width: 95%
    justify-content: center

.graphDisplay2
   max-width: 100%
   display: flex
   justify-content: space-between


.colheight
   max-width: 50% !important
   padding-left: 0px !important 
.rowsize
   max-width: 95%
.cardsize
   max-width: 25% !important

.div1
   width: 33% !important
.div2
   width: 100% !important
.row1
   display: flex
   justify-content: space-between
   flex-direction: row

.graphcontainer
   max-width: 100%
</style>