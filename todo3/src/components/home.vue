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
           <v-card-text>{{ item.number}}</v-card-text>
            
            </v-card>
          </v-col>
        
          <v-container >
            <v-row class="row1 pb-3">
              <div class="div1 pr-3"><graph/></div>
              <div class="div1 pl-3 pr-3"><graph2/></div>
               <div class="div1 pl-3"><graph3/></div>
            </v-row>
                 
                 <div class="graphDisplay2">
                   <v-col class="colheight">
                        <graph2/>
                       <graph2/>
                   </v-col>
                  <timeline/>
              </div>
              
               </v-container>
               <v-spacer></v-spacer>
             </v-row>
              
         </v-container>
      
    </v-main>
</template>

<script>

import timeline from './timeline.vue'
import graph from './graph.vue'
import graph2 from './graph2.vue'
import graph3 from './graph3.vue'

export default {
components: { timeline, graph,graph2, graph3},
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
   width: 50%
   padding-left: 0px !important 
.rowsize
   max-width: 95%
.cardsize
   max-width: 25% !important

.div1
   width: 33% !important

.row1
   display: flex
   justify-content: space-between
   flex-direction: row


</style>