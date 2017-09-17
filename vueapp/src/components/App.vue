<template>
  <div id="background">
      <div class="picture">
          <img src="https://goo.gl/XxkWUc" alt="King of hearts">
      </div>
      <players-list v-if='seka == 1' :letsGo='letsGo' ></players-list>
      <game-selection v-if='seka == 2' :letsGo='letsGo' ></game-selection>
      <cards-taken v-if='seka == 3'></cards-taken>
      <div id="pradziosMygtukas">
        <input type="button" value="Let's go" v-on:click="letsGo">
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PlayersList from './PlayersList.vue'
import GameSelection from './GameSelection.vue'
import CardsTaken from './CardsTaken.vue'

export default {
  name: 'app',
  components: {PlayersList, GameSelection, CardsTaken},
  data () {
    return {
      seka: 1,
      showNames: true
    }
  },
  methods: {
    letsGo() {
      // if (this.seka == 3) {
      //   this.seka = 0;
      // }
      this.seka = this.seka % 3 + 1;

      // if (this.seka == 1) {
      //   this.showNames = true;
      // }
      // else {
      //     this.showNames = false;
      // }
      this.showNames = (this.seka == 1)
      console.log(`seka: ${this.seka}; showNames: ${this.showNames}`);
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
