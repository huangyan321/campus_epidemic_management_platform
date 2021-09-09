import {
  login,
  getInfo
} from '@/api/login'
import {
  Message
} from 'element-ui'
import {
  getToken,
  setToken,
  removeToken,
  getRoleId,
  setRoleId
} from '@/utils/auth'
import {
  resetRouter
} from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    roleId: getRoleId(),
    name: '',
    avatar: '',
    classes: [],
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ID: (state, id) => {
    state.roleId = id
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_CLASSES: (state, classes) => {
    state.classes = classes.split(';')
  },
  SET_CLASSES1: (state, classes) => {
    state.classes = classes
  }
}

const actions = {
  // user login
  login({
    commit
  }, userInfo) {
    const {
      username,
      password,
      type
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password: password,
        type: type
      }).then(res => {
        if (res.meta.status === 200) {
          const {
            data
          } = res;
          commit('SET_TOKEN', data.token);
          commit('SET_ID', data.id);
          setToken(data.token);
          setRoleId(data.id)
          resolve()
        } else {
          Message({
            message: res.meta.msg,
            type: 'error',
            duration: 5 * 1000
          })
          reject(error)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const {
          data
        } = response
        if (!data) {
          return reject('Verification failed, please Login again.')
        }
        const {
          username,
          head,
          classes
        } = data.result
        commit('SET_NAME', username)
        commit('SET_CLASSES', classes)
        commit('SET_AVATAR', head)
        resolve(data.result)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      window.sessionStorage.clear();
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
