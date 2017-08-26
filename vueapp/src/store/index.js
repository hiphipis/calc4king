import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'

Vue.use(Vuex)

const state = {
  players: {
    'Player 1': 'nif nif',
    'Player 2': 'naf naf',
    'Player 3': 'nuf nuf',
    'Player 4': 'nax nax'}
}

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  // getters,
  state,
  getters: {
    allPlayers: state => {
      return state.players
    }
  }
  , strict: debug
})

export default store
