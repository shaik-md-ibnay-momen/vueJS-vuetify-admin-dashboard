 <v-form
      ref="form"
      v-model="valid"
      lazy-validation
   >
            <v-container class="py-0 mt-11 loginclass">
              <v-row class="textfield">
                <v-row
                >
                  <v-text-field
                    class="purple-input textareacss"
                    placeholder="name@email.com"
                    filled
                    rounded
                    dark
                    dense
                    clearable
                    background-color="#b70b20"
                    prepend-inner-icon="mdi-email"
                    label="Email or Username"
                    type="email"
                    required
                  />
                </v-row>

                <v-row

                >
                  <v-text-field
                    label="Password"
                    class="purple-input textareacss"
                    placeholder="**********"
                    filled
                    rounded
                    dark
                    dense
                    clearable
                    background-color="#b70b20"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    required
                  />
                </v-row>

 

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="validate"
                  >
                    Sing In
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>