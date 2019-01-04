import { ApiService } from '@/api'
export default {
  namespaced: true,
  state: {
    user: {
      username: null,
      email: null,
      password: null
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },
  mutations: {
    setUsers(state, data) {
      state.user = data
    }
  },
  actions: {
    sendUser(context, user) {
      console.log(user)
      ApiService.post('users/login', {user: user }).then(response => {
        console.log('response', response.data.user)
        context.commit('setUsers', response.data.user)
        ApiService.setToken(response.data.user.token)
      })
    },
    getUserLogin(context) {
      var token = localStorage.getItem('loginToken');
      if(token) {
        ApiService.setHeaderAuthen(token);
        return new Promise(() => {
          ApiService.get('user').then(response => {
            context.commit('setUsers', response.data.user)
          })
        })
      }
    }
  }
}
