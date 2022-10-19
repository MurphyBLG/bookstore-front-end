<template>
  <AddBook v-if="addBookFormIsShown" @close="toggleAddButton"/>
  <div class="table_header">
      <MyBtn class="add_book_btn" btnText="Add book" @click="toggleAddButton"/>
      <MyBtn class="edit_book_btn" btnText="Edit book"/>
      <MyBtn class="delete_book_btn" btnText="Delete book"/>
  </div>
</template>

<script>
import  MyBtn from './MyBtn.vue'
import AddBook from './AddBook.vue';
export default {
  data() {
    return {
      addBookFormIsShown: false,  
    }
  },
  components: { MyBtn, AddBook },
  methods: {
    toggleAddButton() {
      this.addBookFormIsShown = !this.addBookFormIsShown;
    }
  }
}
</script>

<style>
  .table_header {
    display: inline-flex;
    height: 25px;
  }
</style>