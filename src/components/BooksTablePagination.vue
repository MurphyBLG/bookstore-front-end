<template>
    <div class="books_table_pagination">
      <MyBtn class="go_to_left_btn" btnText="<-"/>
      <MyBtn class="go_to_left_btn" :btnText="totalPage" />
      <MyBtn class="go_to_right_btn" btnText="->"/>
    </div>
</template>

<script>
import  MyBtn from './MyBtn.vue'

export default {
    data() {
        return {
            recordsPerPage: 5,
            currentPage: 0,
        }
    },
    components: { MyBtn },
    props: {
        recordsCnt: Number
    },
    computed: {
        pages() {
            return Math.ceil(this.recordsCnt / this.recordsPerPage); 
        },
        totalPage() {
            return `Page ${this.currentPage + 1} of ${this.pages}`;
        }
    }
}
</script>

<style>
    .books_table_pagination {
        display: inline-flex;
        justify-content: space-between;
        height: 25px;
    }
</style>