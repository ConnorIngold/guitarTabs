<template>
  <div class="hello">
    <div class="p">register here</div>
    <input type="text" name="email" placeholder="email" v-model="email" />
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
    />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "../../services/AuthenticationService";
export default {
  data() {
    return {
      email: "abc",
      password: "123"
    };
  },
  watch: {
    email(value) {
      console.log("email has changed to: ", value);
    }
  },
  mounted() {
    setTimeout(() => {
      this.email = "hello world";
    }, 1000);
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
