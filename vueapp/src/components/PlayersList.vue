<template>
  <div id="vardai" :class="{reveal:showNames}">
    <transition-group name="fade" tag="div">
      <input type="text" v-show="showNames" v-for="(player, key, index) in players" :placeholder="key" :key="index">
    </transition-group>
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

<style>
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

  text-align:center;
  height:0px;
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
