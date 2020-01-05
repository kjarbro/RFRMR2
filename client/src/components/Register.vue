<template>
    <v-card class="white elevation-2">
        <v-toolbar
          class="blue-grey"
          flat
          text
        >
        <v-toolbar-title>Sign up!</v-toolbar-title>
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
          <v-btn text class="blue-grey" @click="register">Register</v-btn>
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
    async register () {
      try {
        await AuthenicationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
