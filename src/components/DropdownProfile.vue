<template>
  <div class="icon" @click="toggleDD" v-click-outside-element="closeDD">
    <slot></slot>
  </div>
  

  <div class="sub-menu" v-if="isOpen">
    <div v-if="!userIsGuest">
      <a class="menu-item" href="#">Profile</a>
    </div>

    <div v-if="!userIsGuest">
      <a class="menu-item" href="#">Orders</a>
    </div>
    
    <div v-if="!userIsGuest">
      <a class="menu-item" href="#" @click="LogOut()">Logout</a>
    </div>

    <div v-if="userIsGuest">
      <a class="menu-item" href="/">Log in</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    ...mapActions(["LogOut"]),
    toggleDD() {
      this.isOpen = !this.isOpen;
    },
    closeDD() {
      this.isOpen = false;
    },
    logOut() {
      this.LogOut();
      return true;
    }
  },
  computed: {
    userIsGuest() {
      return this.$store.state.auth.user.role === "guest";
    },
  }
};
</script>

<style scoped>
.sub-menu {
  top: 50px;
  position: absolute; 
  background-color: #D0B097;
  border-radius: 0 0 5px 5px;
}

.menu-item {
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin: 10px;
}
</style>