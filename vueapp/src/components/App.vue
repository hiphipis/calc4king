<template>
  <div id="background">
      <div id="picture">
          <img src="https://goo.gl/XxkWUc" alt="King of hearts">
      </div>
      <players-list v-if='showNames' :showNames='showNames'></players-list>
      <game-selection v-else ></game-selection>
      <div id="pradziosMygtukas">
        <input type="button" value="Let's go" v-on:click="letsGo">
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PlayersList from './PlayersList.vue'
import GameSelection from './GameSelection.vue'

export default {
  name: 'app',
  components: {PlayersList, GameSelection},
  data () {
    return {
      showNames: false
    }
  },
  methods: {
    letsGo() {
      this.showNames = !this.showNames
    }
  }
}
</script>

<style>
/*body {
  margin: 0;
}
#background {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: -webkit-linear-gradient(#000033,#003399);
  width: 100%;
  height: 100%;
}
img {
  width: 100px;
  height: auto;
}
#picture {
  position: relative;
  margin: 5px;
}
#pradziosMygtukas {
  position: relative;
}

input[type="button"] {
  border-radius: 12px;
  background: -webkit-linear-gradient(#004d00,#009900);
  border: 1px black;
  color: white;
  padding: 6px 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}*/

</style>
