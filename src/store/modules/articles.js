import { ApiService } from '@/api'
export default {
  namespaced: true,
  state: {
    articles: [],
    abc: true
  },
  getters: {

  },
  mutations: {
    setArticles(state, data) {
      state.articles = data
    }
  },
  actions: {
    getArticles(context) {
      ApiService.get('articles').then(res => {
        return context.commit('setArticles', res.data.articles)
      })
    }
  }
}
