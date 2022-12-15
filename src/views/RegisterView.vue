<template>
  <div class="sign_up_backdrop">
    <div class="sign_up_form">
      <div class="sign_up_header">
        <p style="color: white; font-weight: bold">SIGN UP</p>
      </div>

      <div class="login_input">
        <label for="login">Login: </label>
        <input type="text" v-model="login" />
      </div>

      <div class="password_input">
        <label for="password">Password: </label>
        <input type="password" v-model="password" />
      </div>

      <div class="name_input">
        <label for="name">Name: </label>
        <input type="text" v-model="name" />
      </div>

      <div class="surname_input">
        <label for="surname">Surname: </label>
        <input type="text" v-model="surname" />
      </div>

      <div class="email_input">
        <label for="eMail">E-Mail: </label>
        <input type="email" v-model="eMail" />
      </div>

      <div class="buttons">
        <MyBtn class="confirm_book_addition" style="width: 100%" btnText="OK" @click="signUp" />
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      login: "",
      password: "",
      name: "",
      surname: "",
      eMail: "",
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async signUp() {
      var user = {
        username: this.login,
        password: this.password,
        name: this.name,
        surname: this.surname,
        eMail: this.eMail,
      };

      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      if (!validateEmail(user.eMail)) {
        alert('Incorrect email format');
        return;
      }

      if (user.password.length < 6) {
        alert('Password must be more than 6 characters long');
        return;
      }

      await this.Register(user);
    },
  },
};
</script>
  
<style>
.sign_up_backdrop {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.sign_up_form {
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 2fr 2fr 2fr 2fr;

  position: absolute;
  margin: 0;

  width: 400px;
  height: 500px;

  background: #faf2eb;
  border-radius: 5px;

  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.sign_up_header {
  background-color: #d0b097;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_input,
.password_input,
.name_input,
.surname_input,
.email_input {
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