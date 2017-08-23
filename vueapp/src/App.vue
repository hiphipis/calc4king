<template>
  <div id="background">
      <div id="picture">
          <img src="https://goo.gl/XxkWUc" alt="King of hearts">
      </div>
      <div id="vardai" :class="{reveal:showNames}">
        <transition-group name="fade" tag="div">
          <input type="text" v-show="showNames" v-for="(player, key, index) in players" :placeholder="key" :key="index">
        </transition-group>
      </div>
      <div id="pradziosMygtukas">
        <input type="button" value="Let's go" v-on:click="showNames = !showNames">
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showNames: false,
      players: {
        'Player 1': 'nif nif',
        'Player 2': 'naf naf',
        'Player 3': 'nuf nuf',
        'Player 4': 'nax nax'},
      msg: 'Welcome to Your Vue.js App'
    }
  }
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

input[type="text"] {
  display: flex;
  height: 20px;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;

  background-color: #AAF;
  border-radius: 5px;
  border: none;
}
#vardai {
  display: block;
  /* padding: 5px;
  margin: 5px; */

  text-align:center;
  /* background-color: #eeeeee; */
  /* display: block; */
   height:0px;
  /* width:300px;     */
  transition:all 0.8s cubic-bezier(0.39, 0.575, 0.565, 1); /* easeOutSine, see http://easings.net/ */
  overflow:hidden;
}

#vardai.reveal{
   height: 150px;
}

#vardai > div {
   transform: translateY(-150px);
   transition:all 0.8s cubic-bezier(0.39, 0.575, 0.565, 1); /* easeOutSine, see http://easings.net/ */
}

#vardai.reveal > div {
   transform: translateY(0px);
}

.fade-enter-active {
   transition: opacity 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335); /* easeInCirc, see http://easings.net/ */
}
.fade-leave-active {
   transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1); /* easeOutCirc, see http://easings.net/ */
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
