<template>
    <button :class="type">{{btnText}}</button>
</template>

<script>
export default {
    props: {
        type: String,
        btnText: String
    }
}
</script>

<style>
    button.add_book_btn {
        margin-right: 10px;
        color: white;
        border: none;
        border-radius: 5px;
        background-color: #6EBE49 ;
    }
    
    button.edit_book_btn {
        margin-right: 10px;
        color: white;
        border: none;
        border-radius: 5px;
        background-color: #BEAA49;
    }

    button.delete_book_btn {
        margin-right: 10px;
        color: white;
        border: none;
        border-radius: 5px;
        background-color: #BE494D;
    }

    button.go_to_right_btn {
        color: white;
        border: none;
        border-radius: 5px;
        background-color: #D0B097;
    }

    button.go_to_right_btn:hover {
        background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
    }

    button.go_to_left_btn {
        color: white;
        border: none;
        border-radius: 5px;
        background-color: #D0B097;
    }

    button.go_to_left_btn:hover {
        background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
    }
</style>