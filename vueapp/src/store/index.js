import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'

Vue.use(Vuex)

const initGames2Play = function() {
  return [
    { name: "Neimti vyrų", played: false },
    { name: "Neimti damų", played: false },
    { name: "Neimti širdžių", played: false },
    { name: "Neimti 2-jų paskutinių", played: false },
    { name: "Neimti Kingo", played: false },
    { name: "Neimti kirčių", played: false },
    { name: "Koziriai čirvai", played: false },
    { name: "Koziriai būgnai", played: false },
    { name: "Koziriai kryžiai", played: false },
    { name: "Koziriai vynai", played: false }
  ]
}

const state = {
  players: {
    'Player 1': {
      name: null,
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
  lastGame: null,
  games2Play: initGames2Play()
}

const getters = {
  allPlayers: state => {
    return state.players
  },
  allGames: state => {
    return state.games2Play
  },
  currentPlayer: state => {
    const key = `Player ${state.currentPlayerIndex}`
    // console.log(key)
    return state.players[key]
  },
  lastGame: state => state.lastGame
}

const mutations = {
  nextPlayer(state) {
    state.currentPlayerIndex = state.currentPlayerIndex % 4 + 1
    // console.log(`state.currentPlayerIndex ${state.currentPlayerIndex}`)
  },
  selectGame(state, gameIx) {
    // console.log(`selectGame ${state}  ${gameIx}`)
    const key = `Player ${state.currentPlayerIndex}`
    state.players[key].games[gameIx].played = true
    state.lastGame = state.games2Play[gameIx].name
    // console.log(state.players[key].games[gameIx])
  },
  updatePlayerName(state, payload) {
    state.players[payload.key].name = payload.name
  }
}

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state,
  getters,
  mutations
  , strict: debug
})

export default store
