import { ApiService } from '@/api'
export default {
  namespaced: true,
  state: {
    cards: [],
    newCard: {
      title: '',
      description: ''
    }
  },
  getters: {

  },
  mutations: {
    GET_CARD(state, data) {
      state.cards = data
    },
    ADD_CARD: (state, card) => {
      state.cards.push(card)
      card = {}
    }
  },
  actions: {
    getCards(context) {
      ApiService.get('http://localhost:3000/cards')
        .then(res => {
          return context.commit('GET_CARD', res.data)
        })
    },
    addCards(context, newCard) {
      ApiService.post('http://localhost:3000/cards', {
        title: newCard.title,
        description: newCard.description,
      })
        .then(res => {
          console.log(res.data)
          context.commit('ADD_CARD', res.data)
          newCard.title = ''
          newCard.description = ''
        })
    
    }
  }
}