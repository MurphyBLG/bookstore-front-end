<template>
  <MyHeader />
  <div class="books_table_wrapper">
    <div class="grid_wrapper">
      <BooksTable />
    </div>
  </div>
</template>

<script>
import BooksTable from "@/components/BooksTableComponent/BooksTable/BooksTable.vue";
export default {
  components: { BooksTable },
};
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

MyHeader {
  display: flex;

  width: 100%;
  height: 50px;

  background-color: #d0b097;
}
</style>