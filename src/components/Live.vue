<template>
  <div class="live">
    <!-- <p class = "desc">
      위 애니메이션은 꼭 소리를 켜고 봐주세요!
    </p> -->
    <img src="~@/assets/images/hands.png" class="hands" />
    <div>
      <p class = "header">
        وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ<br />
      </p>
      <p>
        "Dan di antara tanda-tanda kekuasaan-Nya<br />
        ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri,<br />
        supaya kamu cenderung dan merasa tenteram kepadanya,<br />
        dan dijadikan-Nya diantaramu rasa kasih dan sayang.<br />
        sesungguhnya pada yang demikian itu benar-benar terdapat<br />
        tanda-tanda bagi kaum yang berfikir"<br />
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
