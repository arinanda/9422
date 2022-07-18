<template>
  <div class="live">
    <p class = "desc">
      Artwork by @gemilangprtm
    </p>
    <img src="~@/assets/images/hands.png" class="hands" />
    <div>
      <p class = "header">
        وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ<br />
      </p>
      <p>
        "And of His signs is that<br/> 
        He created for you from yourselves mates<br/>
        that you may find tranquility in them;<br/>
        and He placed between you affection and mercy.<br/>
        Indeed in that are signs for a people who give thought"<br />
        ( Ar-Ruum : 21 )
      </p>
    </div>
    <!-- <Button @click="playSound">Watch Live</Button> -->
  </div>
</template>

<script>
const {Howl} = require('howler');
export default {
  name: "Divider",
  methods: {
    attendance() {
      window.open("https://youtu.be/yU9UULnBt0w");
    },
    playSound() {
        var sound = new Howl({
            src: 'https://www.mboxdrive.com/New%20Home.mp3',
            volume: 0.1,
            html5: true,
            preload: true,
            autoplay: true,
            loop: true
        });
        sound.play();
    }
  },
};
</script>

<style lang="scss" scoped>
.live {
  padding-top: 4px;
  padding-bottom: 68px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 16px;
    line-height: 24px;
    &.desc {
      margin-top: 0;
      color: #295238;
      font-size: 10px;
      opacity: 0.6;
      margin-bottom: 36px;
    }
    &.header {
      color: #295238;
    }
    &.names {
      padding-top: 15px;
      margin-bottom: 5px;
      font-size: 42px;
    }
    &.huge {
      font-size: 54px;
      padding-top: 10px;
      padding-bottom: 0px;
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>
