<template>
    <v-card class="elevation-12">
        <v-toolbar
          class="red"
          dark
          flat
        >
        <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Email"
              name="email"
              type = "email"
              v-model="email"
            />

            <v-text-field
              id="password"
              label="Password"
              name="password"
              v-model="password"
              type="password"
            />
          </v-form>
          <div class="error"  v-html="error" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn dark flat>Register</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
import AuthenicationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register(){
      try{
        await AuthenicationService.register({
        email: this.email,
        password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
