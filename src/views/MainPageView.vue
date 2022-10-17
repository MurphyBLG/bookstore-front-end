<template>
  <div class="books_table_wrapper">
    <div class="grid_wrapper">
      
      <BooksTableControllPanel />
    
      <table class="books_table">
        <thead>
          <tr>
            <th>Book name</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>
      
        <tbody>

          <tr v-for="record in records" :key="record.BookId">
            <td>{{record.name}}</td>
            <td>{{record.author}}</td>
            <td>{{record.price}}</td>
          </tr>

        </tbody>
      </table>

      <BooksTablePagination :recordsCnt="records.length"/>
    </div>
    
  </div>
  
</template>

<script>
import axios from 'axios'
import BooksTableControllPanel from '@/components/BooksTableControllPanel.vue';
import BooksTablePagination from '@/components/BooksTablePagination.vue';
export default {
    data() {
        return {
            records: []
        };
    },
    methods: {
        loadData() {
          axios.get("https://localhost:7147/api/Book", { crossDomain: true }).then((response) => {
            this.records = response.data;
          });
        }
    },
    beforeMount() {
      this.loadData();
    },
    components: { BooksTableControllPanel, BooksTablePagination }
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

  .books_table {
    border-collapse: collapse;

    margin: 10px 0;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  .books_table thead tr {
    background-color: #D0B097;
    color: white;

    text-align: left;
    font-weight: bold;
  } 

  .books_table th, 
  .books_table td {
    padding: 12px 15px;
  }

  .books_table tbody tr {
    border-bottom: 1px solid #E5CEBC;
  }

  .books_table tbody tr:nth-of-type(even) {
    background-color: #F5E9E0;
  }

  .books_table tbody tr:last-of-type {
    border-bottom: 2px solid #D0B097;
  }

  .grid_wrapper {
    display: grid;
  }
</style>