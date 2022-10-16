<template>
  <div class="books_table_wrapper">
    <table class="books_table">
      <thead>
        <tr>
          <th>Book name</th>
          <th>Author</th>
          <th>Price</th>
        </tr>
      </thead>
    
      <tbody>
        <tr>
          <td>Book name</td>
          <td>Author</td>
          <td>Price</td>
        </tr>

        <tr>
          <td>Book name</td>
          <td>Author</td>
          <td>Price</td>
        </tr>

        <tr>
          <td>Book name</td>
          <td>Author</td>
          <td>Price</td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>

<script>
export default {
  
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
  }

  .books_table {
    border-collapse: collapse;

    margin: 25px 0;
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
</style>