import { defineAbilitiesFor, abilities } from "@/services/user-management";

const state = () => ({
  value: null
});

const mutations = {
  SET_USER(state, user) {
    state.value = user;
  }
};

const actions = {
  setUser({ commit }, user) {
    commit("SET_USER", user);
    abilities.update(defineAbilitiesFor(user));

    if (user) {
      localStorage.setItem("vue-casl/user", JSON.stringify(user));
    } else {
      localStorage.removeItem("vue-casl/user");
    }
  },
  clearUser({ dispatch }) {
    dispatch("setUser", null);
  },
  /*eslint-disable-next-line no-unused-vars*/
  fetchUser({ commit }, email, password) {
    //todo: AuthenticationService for fetching the User from the server
    const user = {};
    commit("SET_USER", user);
  }
};

const getters = {
  user: state => state.value
};

export const user = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
