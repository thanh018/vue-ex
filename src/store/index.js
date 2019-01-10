import Vue from "vue"
import Vuex from "vuex"
import articles from './modules/articles'
import login from './modules/login'
import example from './modules/example'

Vue.use(Vuex)
const state = {}
const getters = {}
const mutations = {}
const actions = {}
const modules = {
  articles,
  login,
  example
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
