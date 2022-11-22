<template>
  <div class="icon" @click="toggleDD" v-click-outside-element="closeDD">
    <slot></slot>
  </div>
  

  <div class="sub-menu" v-if="isOpen">
    <div v-for="(item, i) in items" :key="i">
      <a class="menu-item" :href="item.link"> {{ item.title }} </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleDD() {
      this.isOpen = !this.isOpen;
    },
    closeDD() {
      this.isOpen = false;
    }
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
}
</style>