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

  },
  mutations: {
    setUsers(state, data) {
      state.user = data
    }
  },
  actions: {
    sendUser(context, user) {
      console.log(user)
      ApiService.post('users', { user : user }).then(response => {
        console.log('response ', response)
        return context.commit('setUsers', response)
      })
    }
  }
}
