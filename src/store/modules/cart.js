import axios from "axios";

export default {
    state: {
        cart: new Map(),
        total: 0
    },
    getters: {
    },
    actions: {
    },
    mutations: {
        addToCart(state, item) {
            const config = {
                headers: { Authorization: `Bearer ${this.state.auth.user.token}` }
            };

            for (const [key, value] of state.cart) {
                if (key.name === item.name && key.price === item.price) {
                    state.cart.set(key, value + 1);
                    axios.post("https://localhost:7147/api/cart", item, config);
                    return;
                }
            }

            state.cart.set(item, 1);
            axios.post("https://localhost:7147/api/cart", item, config);
        },
        countTotal(state) {
            var res = 0;
            for (const [key, value] of state.cart) {
                res += key.price * value;
            }

            state.total = res;
        },
        async getCart(state, token) {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            
            var cartFromBackend = await axios.get("https://localhost:7147/api/cart", config);

            for (var record of cartFromBackend.data) {
                state.cart.set(record.book, record.count)
            }
        },
        makeOrder(state) {
            const config = {
                headers: { Authorization: `Bearer ${this.state.auth.user.token}` }
            };

            axios.post("https://localhost:7147/api/order", config);

            state.cart = new Map();
        }
    }
};