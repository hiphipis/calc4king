<template>
  <div id="background">
      <div id="picture">
          <img src="https://goo.gl/XxkWUc" alt="King of hearts">
      </div>
      <players-list :showNames='showNames'></players-list>
      <div id="pradziosMygtukas">
        <input type="button" value="Let's go" v-on:click="showNames = !showNames">
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PlayersList from './PlayersList.vue'

export default {
  name: 'app',
  components: {PlayersList},
  data () {
    return {
      showNames: false
    }
  },
  computed: mapGetters({
      players: 'allPlayers'
  })

}
</script>

<style>
body {
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
  /*top: 20%;
  left: 45%;*/
}
#pradziosMygtukas {
  position: relative;
  /*width: 100px;*/
}

input[type="button"] {
  border-radius: 12px;
  background: -webkit-linear-gradient(#004d00,#009900);
  border: 1px black;
  color: white;
  padding: 6px 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}

</style>
