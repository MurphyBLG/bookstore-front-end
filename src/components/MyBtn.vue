<template>
  <button :class="type" :disabled="disabled">{{ btnText }}</button>
</template>

<script>
export default {
  props: {
    type: String,
    btnText: String,
    disabled: Boolean,
  },
};
</script>

<style scoped>
button:hover {
  background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
}

button:active {
  background: #e5e5e5;
  -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
  -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
  box-shadow: inset 0px 0px 5px #c1c1c1;
  outline: none;
}

button.add_book_btn {
  margin-right: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #6ebe49;
}

button.edit_book_btn {
  margin-right: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #beaa49;
}

button.delete_book_btn {
  margin-right: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #be494d;
}

button.go_to_right_btn {
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #d0b097;
}

button.go_to_right_btn:hover {
  background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
}

button.go_to_left_btn {
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #d0b097;
}

button.go_to_left_btn:hover {
  background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
}

button.confirm_book_addition {
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #d0b097;
  padding: 20px;
  margin: 20px;

  font-weight: bold;
}
</style>