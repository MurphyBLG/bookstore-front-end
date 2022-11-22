<template>
  <div class="icon" @click="toggleDD" v-click-outside-element="closeDD">
    <slot></slot>
  </div>

  <table class="orders" v-if="isOpen">
    <thead>
      <tr>
        <th>Book name</th>
        <th>Price</th>
        <th>Count</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in items" :key="item">
        <td>{{ item[0].name }}</td>
        <td>{{ item[0].price }}</td>
        <td>{{ item[1] }}</td>
      </tr>
      <tr>
        <td></td>
        <td>Total:</td>
        <td>{{ this.$store.state.cart.total }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["items"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    ...mapMutations(["countTotal"]),
    toggleDD() {
      this.isOpen = !this.isOpen;
      this.countTotal();
    },
    closeDD() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.orders {
  border-collapse: collapse;
  top: 50px;
  right: 50px;
  position: absolute;

  width: 300px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.orders thead tr {
  background-color: #d0b097;
  color: white;

  text-align: left;
  font-weight: bold;
}

.orders th,
.orders td {
  text-align: center;
  width: 320px;
  padding: 12px 15px;
}

.orders tbody tr {
  border-bottom: 1px solid #e5cebc;
}

.orders tbody tr:nth-of-type(even) {
  background-color: #f5e9e0;
}

.orders tbody tr:last-of-type {
  border-bottom: 2px solid #d0b097;
}
</style>