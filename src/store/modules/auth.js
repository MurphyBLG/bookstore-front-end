import axios from 'axios';

export default {
    state: {
        user: {
            username: null,
            name: null,
            surname: null,
            email: null,
            role: "guest"
        },
    },
    getters: {

    },
    actions: {
        async Register({ dispatch }, user) {
            await axios.post('https://localhost:7147/api/SignUp', user)
                .catch((error) => {
                    alert(error.response.data);
                });

            await dispatch('LogIn', user);
        },
        async LogIn({ commit }, user) {
            const newUser = await axios.post("https://localhost:7147/api/Login", user)
            .then((response) => { return response.data })
            .catch((error) => { alert(error.response.data) });
            console.log(newUser);
            await commit('setUser', newUser);
        },
        async LogOut({ commit }) {
            let user = null
            commit('logout', user)
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        LogOut(state) {
            state.user = null
        },
    }
};
