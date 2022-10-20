import axios from 'axios'
import AddBook from '../AddBook.vue'

export default {
    data() {
        return {
            records: [],
            page: 0,
            recordsPerPage: 5,
            addBookFormIsShown: false,
        };
    },
    components: { AddBook },
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