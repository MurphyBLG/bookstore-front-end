import axios from "axios";

export default {
    state: {
        cart: [],
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

            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i][0].name === item.name && state.cart[i][0].price === item.price) {
                    state.cart[i][1]++;
                    axios.post("https://localhost:7147/api/cart", item, config);
                    return;
                }
            }

            state.cart.push([item, 1]);
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
            state.cart = [];
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            
            var cartFromBackend = await axios.get("https://localhost:7147/api/cart", config);

            for (var record of cartFromBackend.data) {
                state.cart.push([record.book, record.count]);
            }
        },
        async makeOrder(state) {
            var config = {
                method: 'post',
                url: 'https://localhost:7147/api/Order',
                headers: { 
                  'Authorization': `Bearer ${this.state.auth.user.token}`
                }
              };

            axios(config);

            state.cart = [];
        }
    }
};