<template>
  <div>
    <form @submit.prevent="onAddCard">
      <p>
        <input
          type="text"
          value=""
          v-model="newCard.title"
        >
      </p>
      <p>
        <textarea
          type="text"
          value=""
          v-model="newCard.description"
        >
        </textarea>
      </p>
      <p><button type="submit">Submit</button></p>
      
    </form>
    <div v-for="(card, index) in cards" :key="index">
      <h1>{{card.title}}</h1>
      <p>{{card.description}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Card",
  computed: {
    ...mapState('card', ['cards', 'newCard'])
  },
  mounted() {
    this.getCards()
  },
  methods: {
    ...mapActions('card', ['getCards', 'addCards']),
    onAddCard() {
      this.addCards(this.newCard)    
    }
  }
}
</script>
