<template lang="html">
  <div>
      <h1>Kiek paimta kirciu?</h1>
      <input class="vardai" type="text" v-for="(player, key, index) in players" :placeholder="key" :key="index">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['showNames'],
  computed: mapGetters({
      players: 'allPlayers'
  })

}
</script>

<style lang="css">
</style>
