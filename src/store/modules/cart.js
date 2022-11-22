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
            for (const [key, value] of state.cart) {
                if (key.name === item.name && key.price === item.price) {
                    state.cart.set(key, value + 1);
                    return;
                }
            }

            state.cart.set(item, 1);
        },
        countTotal(state) {
            var res = 0;
            for (const [key, value] of state.cart) {
                res += key.price * value;
            }

            state.total = res;
        }
    }
};