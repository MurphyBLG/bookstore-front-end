<template>
  <nav class="my_header">
    <DropdownCart :items="books">
      <img src="@/assets/shopping-cart.png" style="background: transparent; width: 50px; height: 50px;">
    </DropdownCart>
    
    <DropdownProfile :items="profileServices">
      <img src="@/assets/user.png" style="background: transparent; width: 50px; height: 50px;">
    </DropdownProfile>
  </nav>
</template>

<script>
import DropdownProfile from "./DropdownProfile.vue";
import DropdownCart from "./DropdownCart.vue";

export default {
  data() {
    return {
      profileServices: [
        {
          title: "Profile",
          link: "#",
        },
        {
          title: "Log out",
          link: "#",
        },
      ],
      books: this.$store.state.cart.cart,
    };
  },
  methdos: {

  },
  components: { DropdownProfile, DropdownCart },
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