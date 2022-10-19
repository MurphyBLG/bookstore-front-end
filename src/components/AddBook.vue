<template>
  <div class="backdrop" @click.self="close">
    <div class="add_book_form">
        <div class="book_name_input">
            <label for="bookName">Название книги: </label>
            <input type="text" name="bookName" id="bookName">
        </div>
        <div class="book_author_inpot">
            <label for="bookAuthor">Автор: </label>
            <input type="text" name="bookAuthor" id="bookAuthor">
        </div>
        <div class="book_price_input">
            <label for="bookPrice">Цена: </label>
            <input type="text" name="bookPrice" id="bookPrice">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>

<style>
    .add_book_form {
        display: grid;

        width: 400px;
        height: 500px;
        padding: 20px;
        margin: 100px auto;
        background: #FAF2EB;
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
</style>