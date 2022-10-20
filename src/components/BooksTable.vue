<template>

  <AddBook v-if="addBookFormIsShown" @close="toggleAddButton(); loadData()"/>
  <div class="table_header">
      <MyBtn class="add_book_btn" btnText="Add book" @click="toggleAddButton"/>
      <MyBtn class="edit_book_btn" btnText="Edit book"/>
      <MyBtn class="delete_book_btn" btnText="Delete book"/>
  </div>

  <table class="books_table">
      <thead>
        <tr>
          <th style="width: 40px"></th>
          <th>Book name</th>
          <th>Author</th>
          <th>Price</th>
        </tr>
      </thead>
    
      <tbody>
        <tr v-for="record in recordsToShow" :key="record.BookId">
          <td style="width: 40px">
            <input type="radio" value="{{record.BookId}}" name="row">
          </td>
          <td>{{record.name}}</td>
          <td>{{record.author}}</td>
          <td>{{record.price}}</td>
        </tr>
      </tbody>
  </table>

  <div class="books_table_pagination">
    <MyBtn class="go_to_left_btn" btnText="<-" @click="previousPage()"/>
    <MyBtn class="go_to_left_btn" :btnText="totalPage" />
    <MyBtn class="go_to_right_btn" btnText="->" @click="nextPage()"/>
  </div>
</template>

<script>
import axios from 'axios'
import MyBtn from './MyBtn.vue'
import AddBook from './AddBook.vue'

export default {
    data() {
        return {
            records: [],
            page: 0,
            recordsPerPage: 5,
            addBookFormIsShown: false,
        };
    },
    components: { AddBook, MyBtn },
    methods: {
        loadData() {
          axios.get("https://localhost:7147/api/Book", { crossDomain: true }).then((response) => {
            this.records = response.data;
          });
        },
        nextPage() {
            if (this.page + 2 > this.pages) {
              alert(`Page number can't be more than ${this.pages}`);
              return;
            }

            var ele = document.getElementsByName("row");
            for(var i=0;i<ele.length;i++)
              ele[i].checked = false;

            this.page++;
        },
        previousPage() {
          if (this.page === 0) {
            alert(`Page number can't be less than 0`);
            return;
          }

          var ele = document.getElementsByName("row");
            for(var i=0;i<ele.length;i++)
              ele[i].checked = false;

          this.page--;
        },
        toggleAddButton() {
          this.addBookFormIsShown = !this.addBookFormIsShown;
        },
    },
    beforeMount() {
      this.loadData();
    },
    computed: {
      recordsToShow() {
        return this.records.slice(this.page * this.recordsPerPage, Math.min(this.page * this.recordsPerPage + 5, this.records.length));
      },
      pages() {
        return Math.ceil(this.records.length / this.recordsPerPage); 
      },
      totalPage() {
        return `Page ${this.page + 1} of ${this.pages}`;
      }
    }
}
</script>

<style>
  .books_table {
    border-collapse: collapse;

    width: 1000px;

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
    text-align: center;
    width: 320px;
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

  .books_table_pagination {
    display: inline-flex;
    justify-content: space-between;
    height: 25px;
  }

  .table_header {
    display: inline-flex;
    height: 25px;
  }
</style>