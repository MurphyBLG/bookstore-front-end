<template>
  <div class="books_table_wrapper">
    <div class="grid_wrapper">
      <BooksTableControllPanel />
      
      <BooksTable />
    </div>
  </div>
</template>

<script>
import BooksTableControllPanel from '@/components/BooksTableControllPanel.vue';
import BooksTable from '@/components/BooksTable.vue';
export default {
  components: { BooksTableControllPanel, BooksTable }
}
</script>

<style>
  .books_table_wrapper {
    bottom: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    height: auto;
    margin: auto;
    margin-top: 100px;
  }

  .grid_wrapper {
    display: grid;
  }
</style>