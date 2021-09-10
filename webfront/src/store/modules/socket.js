import Socket from "../webSocket"
import { Message } from "element-ui";

const state = {
  ws: null, //ws实例
}

const mutations = {
  contentSocket(state) {
    state.ws = new Socket();
    console.log(state.ws);
  }
}

const actions = {
  socketInit({commit, state}) {
    commit("contentSocket")
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

