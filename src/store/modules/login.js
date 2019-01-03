import { ApiService } from '@/api'
export default {
  namespaced: true,
  state: {
    user: {
      username: "",
      password: ""
    }
  },
  getters: {

  },
  mutations: {
    setUser(state, data) {
      state.user = data
    }
  },
  actions: {
    getUser(context) {
      ApiService.post('articles').then(res => {
        console.log(res.data);
        return context.commit('setUser', res.data.user)
      })
    }
  }
}
