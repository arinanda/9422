<template>
  <div class="celebrate">
    <img src="~@/assets/images/goose.png" class="goose" />
    
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

    <Button @click="attendance">Tonton Siaran Langsung</Button>


    <p class="underline header">
      <br/>
      Resepsi
    </p>
    <p>
      Pukul 10.00 - 12.00 WITA<br/>
      Aula Masjid Al-Auliya Balikpapan<br/>
      Jln MT Haryono (Ring Road) RT 43 Kel. Graha Indah
      Batu Ampar, Kec. Balikpapan Utara
      Kota Balikpapan, Kalimantan Timur
    </p>
    <p class="notes">
      Note: Tamu Pria & Wanita akan dipisah
    </p>

    <div class="map-container" ref="gal">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.91407574767!2d116.8586017!3d-1.2198663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1471b921fb1c3%3A0xfe3fb0adc46c07a9!2sMasjid%20Al%20Auliya%20Balikpapan!5e0!3m2!1sid!2sid!4v1657374874979!5m2!1sid!2sid" 
        width="100%" 
        height="300" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Celebrate",
  props: {
  },
  methods: {
    attendance() {
      window.open("https://youtu.be/0V5NPhvr0m4");
    },
  },
};
</script>

<style lang="scss" scoped>
.celebrate {
  padding-top: 48px;
  padding-bottom: 50px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;
  cursor: pointer;
  .map-container {
    padding-left: 0;
    padding-right: 0;
  }
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
  .h2 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 24px;
  }
  p {
    margin-bottom: 16px;
    line-height: 24px;

    &.notes {
      color: #EE4B2B;
    }

    &.black {
      color: #202121;
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
    &.header {
      color: #295238;
    }
  }
  .goose {
    width: 90px;
    // margin-top: 48px;
    margin-bottom: 20px;
  }
  .cat {
    width: 85px;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  .gift-list {
    width: 298px;
    margin: 32px auto;

    .gift {
      display: inline-block;
      width: calc(50% - 7px);
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.16);
      margin-bottom: 16px;
      cursor: pointer;
      background: white;

      &.is-disable {
        cursor: default;
      }

      &:nth-child(2n -1) {
        margin-right: 14px;
      }

      .overlay {
        background: white;
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;

        &.is-disable {
          display: block;
          opacity: 0.7;
        }
      }
      .thumbnail {
        width: 100%;
        height: auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .contents {
        padding: 8px;
        text-align: left;
        color: #202121;
        .title {
          font-size: 14px;
          line-height: 1.43;
          height: 40px;
          word-break: keep-all;
        }
        .action {
          font-size: 10px;
          margin-top: 12px;
          display: flex;
          align-items: center;

          img {
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>
