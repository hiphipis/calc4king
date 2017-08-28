<template>
  <div id="pasirinkimoMygtukai">
    <input type="button"  class="myButton" v-for="(game, key, index) in games" :value="key" :key="index">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
      games: 'allGames'
  })

}
</script>

<style>
</style>
