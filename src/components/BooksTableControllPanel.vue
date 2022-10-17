<template>
  <div class="table_header">
      <MyBtn class="add_book_btn" btnText="Add book"/>
      <MyBtn class="edit_book_btn" btnText="Edit book"/>
      <MyBtn class="delete_book_btn" btnText="Delete book"/>
  </div>
</template>

<script>
import  MyBtn from './MyBtn.vue'
export default {
  components: { MyBtn }
}
</script>

<style>
  .table_header {
    display: inline-flex;
    height: 25px;
  }
</style>