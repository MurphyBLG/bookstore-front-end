<template>
  <div class="backdrop" @click.self="close">
    <div class="add_book_form">
      <div class="add_book_header">
        <p style="color: white; font-weight: bold">EDIT BOOK</p>
      </div>
      <div class="book_name_input">
        <label for="bookName">Название книги: </label>
        <input type="text" v-model="bookName" />
      </div>
      <div class="book_author_input">
        <label for="bookAuthor">Автор: </label>
        <input type="text" v-model="bookAuthor" />
      </div>
      <div class="book_price_input">
        <label for="bookPrice">Цена: </label>
        <input type="text" v-model="bookPrice" />
      </div>
      <MyBtn class="confirm_book_addition" btnText="OK" @click="submit" />
    </div>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  data() {
    return {
      bookName: this.objData.bookName,
      bookAuthor: this.objData.bookAuthor,
      bookPrice: this.objData.bookPrice,
    };
  },
  props: {
    objData: {
      bookId: Number,
      bookName: String,
      bookAuthor: String,
      bookPrice: Number,
      bookIndex: Number,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    submit() {
      const bdy = {
        Name: this.bookName,
        Author: this.bookAuthor,
        Price: this.bookPrice,
      };

      axios.put(`https://localhost:7147/api/Book/${this.objData.bookId}`, bdy);
    },
  },
};
</script>
  
<style>
.add_book_form {
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 2fr 1fr;

  width: 400px;
  height: 400px;
  margin: 100px auto;
  background: #faf2eb;
  border-radius: 5px;
}

.backdrop {
  top: 0;
  position: fixed;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.book_name_input {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
}

.book_author_input {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
}

.book_price_input {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
}

.add_book_header {
  background-color: #d0b097;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>