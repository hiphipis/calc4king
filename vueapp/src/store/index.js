import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'

Vue.use(Vuex)

const state = {
  players: {
    'Player 1': 'nif nif',
    'Player 2': 'naf naf',
    'Player 3': 'nuf nuf',
    'Player 4': 'nax nax'},
  games2Play: {
    "Neimti vyru": true,
    "Neimti damu": true,
    "Neimti cirvu": true,
    "Neimti 2 paskutiniu": true,
    "Neimti kingo": true,
    "Neimti kirciu": true,
    "Koziriai cirvai": true,
    "Koziriai bugnai": true,
    "Koziriai kryziai": true,
    "Koziriai vynai": true
  }
}

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  // getters,
  state,
  getters: {
    allPlayers: state => {
      return state.players
    },
    allGames: state => {
      return state.games2Play
    }
  }
  , strict: debug
})

export default store
