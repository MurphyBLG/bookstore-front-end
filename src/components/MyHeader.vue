<template>
  <nav class="my_header">
    <DropdownCart v-if="!userIsGuest" :items="books">
      <img
        src="@/assets/shopping-cart.png"
        style="background: transparent; width: 50px; height: 50px"
      />
    </DropdownCart>

    <DropdownProfile>
      <img
        src="@/assets/user.png"
        style="background: transparent; width: 50px; height: 50px"
      />
    </DropdownProfile>
  </nav>
</template>

<script>
import DropdownProfile from "./DropdownProfile.vue";
import DropdownCart from "./DropdownCart.vue";

export default {
  data() {
    return {
      books: this.$store.state.cart.cart,
    };
  },
  methdos: {},
  components: { DropdownProfile, DropdownCart },
  computed: {
    userIsGuest() {
      return this.$store.state.auth.user.role === "guest";
    },
  },
};
</script>

<style>
.my_header {
  display: flex;

  justify-content: right;

  width: 100%;
  height: 50px;

  background-color: #d0b097;
}
</style>