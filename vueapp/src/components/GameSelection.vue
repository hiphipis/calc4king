<template>
  <div id="pasirinkimoMygtukai">
    <h1>Dabar renkasi {{player.name}}</h1>
    <input type="button"  class="myButton" v-for="(game, key, index) in games" :value="key" :key="index" v-on:click="select(key, game, index)">
    <div id="pradziosMygtukas">
      <input type="button" value="Next" v-on:click="next">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  props: ['letsGo'],
  computed: {
    games() {
      return this.player.games
    },
    ...mapGetters({
      // games: 'allGames',
      player: 'currentPlayer'
    })
  },
  methods: {
    next() {
      this.nextPlayer()
      this.letsGo()
    },
    select(key, game, index) {
      // this.player.games[index] = false
      console.log(`key ${key} game ${game} index ${index}`);
      // console.log(this.games.keys())
      this.selectGame(key)
      this.letsGo()
    },
    ...mapMutations({
      nextPlayer: 'nextPlayer',
      selectGame: 'selectGame'
    })
  }
}
</script>

<style>
</style>
