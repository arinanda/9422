<template>
    <vue-fab mainBtnColor="#295238" icon="audiotrack">
          <fab-item @clickItem="playSound" :idx="0" icon="play_arrow" />
    </vue-fab>
</template>

<script>
const {Howl} = require('howler');
var sound = new Howl({
            // src: 'https://www.mboxdrive.com/new-home.mp3',
            src: 'https://cdn.sndup.net/vh7x/new-home.mp3?token=mHnG6oBr0XlUPoti98fucxOWSObpzT0RIc62VoUYSgc&token_path=%2Fvh7x%2F&expires=1657376785',
            volume: 1.0,
            html5: true,
            preload: true,
            autoplay: true,
            loop: true
        });

  export default {
    name: 'example',
    methods: {
      playSound() {
        return sound.playing() ? sound.pause() : sound.play();
        },
    }
  }
</script>

<style>
    @import 'https://fonts.googleapis.com/icon?family=Material+Icons'
</style>