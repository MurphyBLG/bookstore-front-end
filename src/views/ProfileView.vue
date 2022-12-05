<template>
  <MyHeader />
  <div class="sign_up_backdrop">
    <div class="profile-edit">
      <div class="sign_up_header">
        <p style="color: white; font-weight: bold">Profile</p>
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
        <MyBtn class="confirm_book_addition" style="width: 100%" btnText="OK" @click="callChangeUserInfoMutation" />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      name: this.$store.state.auth.user.name,
      surname: this.$store.state.auth.user.surname,
      eMail: this.$store.state.auth.user.eMail
    }
  },
  components: {
    MyHeader,
  },
  methods: {
    ...mapMutations(['changeUserInfo']),
    ...mapActions(['postUserInfo']),
    callChangeUserInfoMutation() {
      this.changeUserInfo({
        name: this.name,
        surname: this.surname,
        email: this.eMail
      });
      
      this.postUserInfo();
    }
  }

};
</script>

<style>
.profile-edit {
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 2fr 2fr;

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
</style>