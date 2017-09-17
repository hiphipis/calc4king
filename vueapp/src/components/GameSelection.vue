<template>
  <div id="pasirinkimoMygtukai">
    <div id="playerGoingToChoose">Dabar renkasi <span class="playerName">{{player.name}}</span></div>
    <input type="button"  class="myButton"
        v-for="(game, key) in games" :disabled="game.played" :value="game.name" :key="key" v-on:click="select(game, key)">
    <!-- <div id="pradziosMygtukas">
      <input type="button" value="Next" v-on:click="next">
    </div> -->
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
    select(game, key) {
      // console.log(`key ${key} game ${game}`);
      // console.log(game)
      this.selectGame(key)
      this.next()
    },
    ...mapMutations({
      nextPlayer: 'nextPlayer',
      selectGame: 'selectGame'
    })
  }
}
</script>

<style>
#playerGoingToChoose {
  color: white;
  font-size: 2em;
}

.playerName {
  color: lightseagreen;
  font-weight: bolder;
}
</style>
