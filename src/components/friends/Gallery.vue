<template>
  <div class="live">    
    <div>
      <img src="~@/assets/images/flower.png" class="flower" />
      <p>
        Exalted is Allah SWT who created all things in pairs.<br />
        O Allah, allow us to carry out the marriage<br/>
        of our sons and daughters :<br />
      </p>
      <p class="header names">
        Zulfa Nadia
      </p>
      <p class="nomarginbottom">
        Daughter of Mr. Teguh Puji Handoko <br/>
        & Mrs. Wahyuni Wahab
      </p>
      <p class="huge">
        &
      </p>
      <p class="header names">
        Muhammad Adib Arinanda
      </p>
      <p class="nomarginbottom">
        Son of Mr. Yusmiril Rodhyan Noor <br/>
        & Mrs. Fadma Noor Diana
      </p>
    </div>
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
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  .flower {
    width: 70px;
    margin-bottom: 26px;
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
      line-height: normal;
    }
    &.huge {
      font-size: 54px;
      padding-top: 10px;
      padding-bottom: 0px;
    }
    &.dates {
      font-size: 36px;
      color: #fcba03;
      font-weight: bolder;
      line-height: normal;
    }
    &.underline {
      text-decoration: underline;
      padding-bottom: 0px;
    }
  }
}
</style>
