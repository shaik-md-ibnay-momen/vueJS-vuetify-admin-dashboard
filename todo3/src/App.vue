<template>
<v-app >
    <v-card class="overflow-hidden"
  flat
  >
     <v-navigation-drawer
      v-model="drawer"
      permanent
      :mini-variant.sync="mini"
      expand-on-hover
      app
      dark
      class="widthresize"
    >
      <v-list-item class="px-2 navbox">
        <v-list-item-avatar>
          <v-img src="data:image/png;base64,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"></v-img>
        </v-list-item-avatar>

        <v-list-item-title  
        >Bkash</v-list-item-title>

      </v-list-item>

      <v-divider></v-divider>

      <v-list class="listcurve" >

        <v-list-item
          v-for="item in items"
          :key="item.title"
          dark
          link
          class="activeitem"
          router :to="item.link"
        >
          <v-list-item-icon>
            <v-icon color="#f21151" >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div class="slimbar"></div>
        <v-menu
        dark
        
      :close-on-click="closeOnClick"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-list-item
          v-bind="attrs"
          v-on="on"
          v-for="item in items2"
          :key="item.title"
          dark
          link
          class="activeitem"
        >
          <v-list-item-icon>
            <v-icon color="#f21151" >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

        <v-list-item
          class="projectDropdown"
          v-for="(item, index) in dropdown"
          :key="index"
        >
        <v-list-item-avatar :color="item.color">
          <v-img :src= "item.imagelink" ></v-img>
        </v-list-item-avatar>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
 
    </v-menu>
      </v-list>
      <template v-slot:append>
        <div class="pa-6"
        >
        <div v-if="mini===false">
          <v-btn  block color="#B71C1C" class="white--text">
          Logout 
          </v-btn>
        </div>  
        <div  v-if="mini===true">
            <v-icon > mdi-logout </v-icon>
        </div>
          
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
    app
    height="70px"
     fixed
      color="#fcb69f"
      dark
      src="https://www.bkash.com/app/img/bg/app-welcome-banner-desktop.jpg"  
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(220, 20, 60, 1),rgba(220, 20, 60, 1)"
        ></v-img>
      </template>

     

      <v-app-bar-title><h2>bKash</h2></v-app-bar-title>

      <v-spacer></v-spacer>
        
          <v-text-field
            @focus="searchClosed=false"
            @blur="searchClosed=true"
            v-model="srch"
            class="mt-7 expending-search"
            :class="{'closed': searchClosed && !srch}"
            placeholder="Search"
            filled
            rounded
            dark
            dense
            clearable
            prepend-inner-icon="mdi-magnify"
            background-color="#b70b20"
          >
          </v-text-field>

      <Notification/>
       
       <v-menu
        
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="white"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
   <router-view></router-view>
    
  </v-card>
  
</v-app>
</template>

<script>


import Notification from './components/notification.vue'

export default {
components: { Notification},

data () {
  
      return {
        srch: null,
        searchClosed: true,
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-home-city', link: '/' },
          { title: 'My Account', icon: 'mdi-account', link: '/About' },
          { title: 'Users', icon: 'mdi-account-group-outline', link: '/About' },
         
        ],
        items2: [
          { title: 'Projects', icon: 'mdi-clipboard-account', link: '/About' },
         
        ],
        dropdown:[
          { title: 'Bkash', color: '#F50057', link: '/', imagelink: 'data:image/png;base64,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'},
          { title: 'Nagad', color: '#E65100', link: '/', imagelink: 'https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/93/2c/ee/932ceef5-0f6e-23c9-a3b5-8e9ea1147791/source/512x512bb.jpg'},

        ],
        closeOnClick: true,
        mini: true,
      }
    },
}
</script>

<style lang="sass">
.navbox
  height: 70px  !important
  
.container.slideDown
    margin-top: 100px !important
    margin-left: 56px  !important 
    box-shadow: none !important

.v-input.closed
    max-width: 55px !important
    .v-input__slot
      background: transparent !important
.v-input.expending-search
    transition: max-width 0.5s
    max-width: 35%
    .v-input__slot
      cursor: pointer !important
.col-3
  max-width: 100% !important

.v-app-bar-title__content
   text-shadow: 5px 5px 7px #880E4F

.v-application .px-2
   background-color: crimson
   height: 100px
   .v-list-item__title
     font-size: 25px
     font-weight: bold

.v-list-item__content
  .v-list-item__title
     font-size: 15px !important
     font-weight: bold
  
.activeitem:hover
    color: red !important
    background-color: white
    border-top-left-radius: 25px
    border-bottom-left-radius: 25px

.slimbar
   max-width: 100%
   height: 2px
   background-color: #616161 !important  
   margin-top: 5px !important
   margin-bottom: 5px !important  

.projectDropdown
  background-color: #212121
</style>