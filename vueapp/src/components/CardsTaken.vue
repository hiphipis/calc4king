<template lang="html">
  <div id="cardsTaken">
    <div id="lastGame">Sužaista: <span class="gameName">{{lastGame}}</span></div>
      <input class="vardai" type="text" v-for="(player, key, index) in players" :placeholder="key" :key="index">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['showNames'],
  computed: mapGetters({
      players: 'allPlayers',
      lastGame: 'lastGame'
  })

}
</script>

<style lang="css">
#cardsTaken {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#lastGame {
  color: lightgrey;
  font-size: 2em;
}

.gameName {
  color: lightcoral;
}
</style>
