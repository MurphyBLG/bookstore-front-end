import axios from 'axios'
import AddBook from '../AddBook.vue'
import EditBook from '../EditBook.vue'

export default {
    data() {
        return {
            records: [],
            page: 0,
            recordsPerPage: 5,
            addBookFormIsShown: false,
            selectedObj: null,
            editBookFormIsShown: false
        };
    },
    components: { AddBook, EditBook },
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
            for (var i = 0; i < ele.length; i++)
                ele[i].checked = false;

            this.page++;
        },
        previousPage() {
            if (this.page === 0) {
                alert(`Page number can't be less than 0`);
                return;
            }

            var ele = document.getElementsByName("row");
            for (var i = 0; i < ele.length; i++)
                ele[i].checked = false;

            this.page--;
        },
        toggleAddButton() {
            this.loadData();
            this.addBookFormIsShown = !this.addBookFormIsShown;
        },
        deleteBook() {
            if (this.selectedObj === null) {
                alert("You need to pick book to delete it!");
            } else {
                axios.delete(`https://localhost:7147/api/Book/${this.selectedObj.bookId}`);
                this.records.splice(this.page * 5 + this.selectedObj.bookIndex, 1);
                this.selectedObj = null;
            }
        },
        toggleEditButton() {
            this.loadData();
            this.editBookFormIsShown = !this.editBookFormIsShown;
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