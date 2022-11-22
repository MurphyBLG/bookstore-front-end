import axios from 'axios';
import router from '@/router';

export default {
    state: {
        user: {
            token: null,
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
            var err = await axios.post('https://localhost:7147/api/SignUp', user)
                .catch((error) => {
                    alert(error.response.data);
                    return true;
                });

            if (err === true) {
                return;
            }
            await dispatch('LogIn', user);
        },
        async LogIn({ commit }, user) {
            const newUser = await axios.post("https://localhost:7147/api/Login", user)
                .then((response) => { return response.data })
                .catch((error) => { alert(error.response.data) });
            console.log(newUser);
            await commit('setUser', newUser);
            router.push('/home');
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
