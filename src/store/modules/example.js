
export default {
  namespaced: true,
  state: {
    title: "This is list links",
    links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com'
    ]
  },

  getters: {
    countLinks: state => {
      return state.links.length
    }
  },

  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1);
    },
    REMOVE_ALL: (state) => {
      state.links = []
    }
  },

  actions: {
    removeLink: (context, link) => {
      context.commit("REMOVE_LINK", link)
    },
    removeAll({commit}) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1000)
      })
    }
  }
}
