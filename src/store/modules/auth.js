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
            commit('getCart', newUser.token, { root: true });
            router.push('/home');
        },
        async LogOut({ commit }) {
            commit('logOut');
            sessionStorage.clear();
            router.push('/');
        },
        async postUserInfo({ state }) {
            var config = {
                method: 'put',
                url: 'https://localhost:7147/api/Profile',
                headers: {
                    'Authorization': `Bearer ${this.state.auth.user.token}`
                },
                data: {
                    token: state.user.token,
                    username: state.user.username,
                    name: state.user.name,
                    surname: state.user.surname,
                    email: state.user.email,
                    role: state.user.role
                }
            };

            await axios(config)
                .catch((error) => {
                    alert(error.response.data);
                    return true;
                });
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        logOut(state) {
            state.user = {
                token: null,
                username: null,
                name: null,
                surname: null,
                email: null,
                role: "guest"
            };
        },
        changeUserInfo(state, { name, surname, email }) {
            const validateEmail = (email) => {
                return String(email)
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
            };

            if (!validateEmail(email)) {
                alert('Incorrect email format');
                return false;
            }

            state.user.name = name;
            state.user.surname = surname;
            state.user.email = email;

            return true;
        }
    }
};
