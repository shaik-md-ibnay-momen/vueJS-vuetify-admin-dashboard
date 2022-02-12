<template
>
 <v-main class="backgroundimage">

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
   <v-container class="py-0 mt-11 loginclass">

        <v-text-field
    class="purple-input textareacss"
      v-model="email"
      :rules="emailRules"
      label="E-mail or Username"
      required
      filled
      rounded
      dark
      dense
      clearable
      background-color="#B71C1C"
      prepend-inner-icon="mdi-email"
    ></v-text-field>

    <v-text-field
      class="purple-input textareacss"
      v-model="password"
      :rules="nameRules"
      label="Password"
      type="password"
      required
      filled
      rounded
      dark
      dense
      clearable
      background-color="#B71C1C"
      prepend-inner-icon="mdi-lock"
    ></v-text-field>

    <v-btn
      color="error"
      class="mr-4"
      @click="validate"
    >
      Sign IN
    </v-btn>

    </v-container>
  </v-form>
    
    <v-footer
    dark
    app bottom fixed padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>

 </v-main>
</template>

<script>
  export default {
    data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Password is required',
      
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail or Username is required',
    ],
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),

      methods: {
    validate () {
      this.$refs.form.validate()
    },
  },
  }
</script>

<style lang="sass">
.backgroundimage
    background: url('../assets/aiback.jpg') center center fixed !important
    background-width: 95%
    justify-content: center
    gradient: (to top right, rgba(100,115,201,.7), rgba(25,32,72,.7))

.textareacss
    cursor: pointer !important

.textfield
   display: flex
   flex-direction: columns

.loginclass
  max-width: 25%
</style>