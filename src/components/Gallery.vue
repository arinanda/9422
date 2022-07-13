<template>
  <div class="live">
    <div>
      <p>
        Maha Suci Allah SWT yang telah menciptakan makhluk-Nya <br />
        berpasang-pasangan. Ya Allah perkenankan kami untuk <br />
        melaksanakan pernikahan putra-putri kami :<br />
      </p>
      <p class="header names">
        Zulfa Nadia
      </p>
      <p class="nomarginbottom">
        Putri dari Bpk. Teguh Puji Handoko <br/>
        & Ibu Wahyuni Wahab
      </p>
      <p class="huge">
        &
      </p>
      <p class="header names">
        Muhammad Adib Arinanda
      </p>
      <p class="nomarginbottom">
        Putra dari Bpk. Yusmiril Rodhyan Noor <br/>
        & Ibu Fadma Noor Diana
      </p>
      <p>
        <br/>
        Yang insya Allah akan diselenggarakan pada : 
      </p>
      <p class="dates">
        Ahad, 4 September 2022
      </p>
      <p class="underline header">
        <br/>
        Akad Nikah
      </p>
      <p>
        Pukul 08.00 - 09.00 WITA <br/>
        Aula Masjid Al-Auliya Balikpapan
      </p>
      <p class="underline header">
        Resepsi
      </p>
      <p>
        Pukul 10.00 - 12.00 WITA<br/>
        Aula Masjid Al-Auliya Balikpapan<br/>
        Jln MT Haryono (Ring Road) RT 43 Kel. Graha Indah
        Batu Ampar, Kec. Balikpapan Utara
        Kota Balikpapan, Kalimantan Timur
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
    &:last-child {
      margin-bottom: 40px;
    }
  }
}
</style>
