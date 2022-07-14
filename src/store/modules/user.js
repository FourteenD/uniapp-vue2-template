const state = {
  token: '',
  userInfo: '',
};

const mutations = {
  setStateAttr(state, param) {
    if (param instanceof Array) {
      for (let item of param) {
        state[item.key] = item.val;
      }
    } else {
      state[param.key] = param.val;
    }
  },
};

const actions = {
  // login({ commit }, userInfo) {
  //   const { username, password } = userInfo;
  //   return new Promise((resolve, reject) => {
  //     login({ username: username.trim(), password: password })
  //       .then((response) => {
  //         const { data } = response;
  //         commit('SET_TOKEN', data.token);
  //         resolve();
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // },
  // getInfo({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     getInfo(state.token)
  //       .then((response) => {
  //         const { data } = response;
  //         if (!data) {
  //           reject('Verification failed, please Login again.');
  //         }
  //         const { roles, name, avatar, introduction, route } = data;
  //         if (!roles || roles.length <= 0) {
  //           reject('getInfo: roles must be a non-null array!');
  //         }
  //         commit('SET_ROLES', roles);
  //         commit('SET_NAME', name);
  //         commit('SET_AVATAR', avatar);
  //         commit('SET_INTRODUCTION', introduction);
  //         commit('SET_ROUTE', filterAsyncRouter(route));
  //         resolve(data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // },
  // logout({ commit, state, dispatch }) {
  //   return new Promise((resolve, reject) => {
  //     logout(state.token)
  //       .then(() => {
  //         commit('SET_TOKEN', '');
  //         commit('SET_ROLES', []);
  //         removeToken();
  //         resetRouter();
  //         dispatch('tagsView/delAllViews', null, { root: true });
  //         resolve();
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // },
  // resetToken({ commit }) {
  //   return new Promise((resolve) => {
  //     commit('SET_TOKEN', '');
  //     commit('SET_ROLES', []);
  //     removeToken();
  //     resolve();
  //   });
  // },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
