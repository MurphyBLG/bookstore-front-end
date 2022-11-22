<template>
  <div class="auth_backdrop">
    <div class="auth_form">
      <div class="log_in_header">
        <p style="color: white; font-weight: bold">LOG IN</p>
      </div>

      <div class="login_input">
        <label for="login">Login: </label>
        <input type="text" v-model="login" />
      </div>

      <div class="password_input">
        <label for="password">Password: </label>
        <input type="password" v-model="password" />
      </div>

      <div class="buttons">
        <MyBtn
          class="confirm_book_addition"
          style="width: 100%"
          btnText="Log in"
          @click="logIn"
        />
        <MyBtn
          class="confirm_book_addition"
          style="width: 100%"
          btnText="Sign up"
          @click="signUp"
        />
        <MyBtn
          class="confirm_book_addition"
          style="width: 100%; height: 57px; padding: 0px 20px 0px 20px"
          btnText="Continue as guest"
          @click="goHome"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from "@/router";

export default {
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async logIn() {
      const user = {
        username: this.login,
        password: this.password,
      };
      await this.LogIn(user);
    },
    async goHome() {
      router.push('/home')
    },
    async signUp() {
      router.push('/sign_up')
    }
  },
};
</script>

<style>
.auth_backdrop {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.auth_form {
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 2fr;

  position: absolute;
  margin: 0;

  width: 500px;
  height: 400px;

  background: #faf2eb;
  border-radius: 5px;

  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.log_in_header {
  background-color: #d0b097;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_input,
.password_input {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>