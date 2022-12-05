import { createStore } from 'vuex'
import auth from './modules/auth';
import cart from './modules/cart';
import createPersistedState from 'vuex-persistedstate'

const dataState = createPersistedState({
  storage: window.sessionStorage
})

export default createStore({
  modules: {
    auth, cart
  },
  plugins: [dataState]
});
