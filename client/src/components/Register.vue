<template>
  <v-layout column class="v-application">
    <v-flex xs7 ma-auto>
      <div class="white elevation-2">
        <v-toolbar flat dense dark class="cyan">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-4 pb-4 flex">
          <div class="light-green lighten-3 l9">register here</div>
          <input w100 type="text" name="email" placeholder="email" v-model="email" />
          <br>
          <input
            type="password"
            name="password"
            placeholder="password"
            v-model="password"
          />
          <br>
          <v-btn depressed large dark color="primary" class="mt-4" @click="register">Register</v-btn>
          <div class="cyan" v-html="error"></div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "../../services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error {
  color: red;
}
</style>
