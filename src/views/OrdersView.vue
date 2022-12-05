<template>
  <MyHeader />
  <div class="order_card" v-for="(obj, order_id ) in orders" :key="order_id">
    <div class="order_number">Order № {{order_id}} </div>
    <div v-for="(rec, index) in obj" :key="index">
      {{rec}}
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import axios from 'axios';

export default {
  components: { MyHeader },
  data() {
    return {
      orders: [],
    }
  },
  async beforeMount() {
    var config = {
      method: 'get',
      url: 'https://localhost:7147/api/Order',
      headers: {
        'Authorization': `Bearer ${this.$store.state.auth.user.token}`
      },
    }

    this.orders = (await axios(config)).data;
    console.log(this.orders);
  }
}


</script>

<style>
.order_card {
  display: grid;

  background-color: red;
  border-radius: 5px;

  margin: 10px;
}
</style>