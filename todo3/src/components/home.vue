<template>
    <v-main class="backgroundimage">
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

          <v-timeline
      dense
      clipped
    >
      <v-timeline-item
        fill-dot
        class="white--text mb-12"
        color="orange"
        large
      >
        <template v-slot:icon>
          <span>JL</span>
        </template>
        <v-text-field
          v-model="input"
          hide-details
          flat
          label="Leave a comment..."
          solo
          @keydown.enter="comment"
        >
          <template v-slot:append>
            <v-btn
              class="mx-0"
              depressed
              @click="comment"
            >
              Post
            </v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>

      <v-slide-x-transition
        group
      >
        <v-timeline-item
          v-for="event in timeline"
          :key="event.id"
          class="mb-4"
          color="pink"
          small
        >
          <v-row justify="space-between">
            <v-col
              cols="7"
              v-text="event.text"
            ></v-col>
            <v-col
              class="text-right"
              cols="5"
              v-text="event.time"
            ></v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span>TODAY</span>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="grey"
        icon-color="grey lighten-2"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            This order was archived.
          </v-col>
          <v-col
            class="text-right"
            cols="5"
          >
            15:26 EDT
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            <v-chip
              class="white--text ml-0"
              color="purple"
              label
              small
            >
              APP
            </v-chip>
            Digital Downloads fulfilled 1 item.
          </v-col>
          <v-col
            class="text-right"
            cols="5"
          >
            15:25 EDT
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="grey"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            Order confirmation email was sent to John Leider (john@vuetifyjs.com).
          </v-col>
          <v-col
            class="text-right"
            cols="5"
          >
            15:25 EDT
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        hide-dot
      >
        <v-btn
          class="mx-0"
        >
          Resend Email
        </v-btn>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="grey"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            A $15.00 USD payment was processed on PayPal Express Checkout
          </v-col>
          <v-col
            class="text-right"
            cols="5"
          >
            15:25 EDT
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        color="grey"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            John Leider placed this order on Online Store (checkout #1937432132572).
          </v-col>
          <v-col
            class="text-right"
            cols="5"
          >
            15:25 EDT
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
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
.backgroundimage
    background: url('../assets/aiback.jpg') center center fixed !important
    background-size: cover
    


</style>