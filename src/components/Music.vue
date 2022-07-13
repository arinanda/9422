<template>
<div></div>
</template>

<script>
const {Howl} = require('howler');

export default {
    methods: {
        playSound() {
            var sound = new Howl({
                src: ['~@/assets/audio/new-home.mp3'],
                volume: 0.5,
            });
            sound.play();
        }
    },
}
</script>