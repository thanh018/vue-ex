import { ApiService } from '@/api'
export default {
  namespaced: true,
  state: {
    user: {
      username: null,
      email: null,
      password: null
    },
    currentUser: {}
  },
  getters: {
    getUser(state) {
      return state.currentUser
    }
  },
  mutations: {
    setUsers(state, data) {
      state.currentUser = data
    }
  },
  actions: {
    sendRegister(context, user) {
      console.log(user)
      ApiService.post('users', { user : user }).then(response => {
        console.log('response ', response)
        context.commit('setUsers', response.data.user)
        ApiService.setToken(response.data.user.token)
      })
    },
    sendLogin(context, user) {
      console.log(user)
      ApiService.post('users/login', {user: user }).then(response => {
        console.log('response', response.data.user)
        context.commit('setUsers', response.data.user)
        ApiService.setToken(response.data.user.token)
      })
    },
    getUserLogin(context) {
      var token = localStorage.getItem('loginToken')
      if(token) {
        ApiService.setHeaderAuthen(token)
        return new Promise(() => {
          ApiService.get('user').then(response => {
            context.commit('setUsers', response.data.user)
          })
        })
      }
    },
    logOut(context) {
      localStorage.setItem('loginToken', '')
      return new Promise(() => {
        ApiService.get('user').then(() => {
          context.commit('setUsers', '')
        })
      })
    }
  }
}
