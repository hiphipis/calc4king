import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'

Vue.use(Vuex)

const initGames2Play = function() {
  return {
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

const state = {
  players: {
    'Player 1': {
      name: 'nif nif',
      games: initGames2Play()
    },
    'Player 2': {
      name: 'naf naf',
      games: initGames2Play()
    },
    'Player 3': {
      name: 'nuf nuf',
      games: initGames2Play()
    },
    'Player 4': {
      name: 'nax nax',
      games: initGames2Play()
    }
  },
  currentPlayerIndex: 1,
  games2Play: initGames2Play()
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
    },
    currentPlayer: state => {
      const key = `Player ${state.currentPlayerIndex}`
      console.log(key)
      return state.players[key]
    },
  },
  mutations: {
    nextPlayer(state) {
      state.currentPlayerIndex = state.currentPlayerIndex % 4 + 1
    },
    selectGame(state, gameIx) {
      const key = `Player ${state.currentPlayerIndex}`
      state.players[key].games[gameIx] = false
      console.log(state.players[key].games[gameIx])
    }
  }
  , strict: debug
})

export default store
