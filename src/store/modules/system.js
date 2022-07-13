const state = {}

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
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
