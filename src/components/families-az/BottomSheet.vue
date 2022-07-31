<template>
  <div>
    <transition name="fade" appear>
      <div class="overlay" v-show="isOpen" />
    </transition>

    <transition name="slide" appear>
      <div class="bottom-sheet-container" v-show="isOpen">
        <div class="bottom-sheet">
          <div class="bottom-sheet-header">
            <img src="~@/assets/images/flower.png" class="image" />
            <p>
              Kepada Yth. Bapak/Ibu/Saudara/i<br/><br/>
              <a class="for">{{ kepada }}</a>
            </p>
          </div>
          <button
            :class="['button-bottom', { active: true }]"
            @click="handleClose"
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </transition>
    <a @click="soundControl" class="float">
        <i class="fa fa-music my-float">
        </i>
    </a>
  </div>
</template>

<script>
const {Howl} = require('howler');
var sound = new Howl({
            src: 'https://cdn.jsdelivr.net/gh/arinanda/audio/new-home.mp3',
            volume: 1.0,
            html5: true,
            preload: true,
            autoplay: true,
            loop: true
        });

export default {
  name: "BottomSheet",
  data() {
    return {
      kepada: "",
      senderName: null,
      message: null,
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
  },
  methods: {
    handleClose() {
      this.$emit("close");
      return sound.play();
    },
    soundControl() {
      return sound.playing() ? sound.pause() : sound.play();
    }
  },
  mounted() {
    this.kepada = this.$route.query.kepada;
  },
};
</script>

<style lang="scss" scoped>
.float{
	position:fixed;
	width:40px;
	height:40px;
	bottom:25px;
	right:25px;
	background-color:#295238;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
}

.my-float{
	margin-top:12px;
  margin-left:-2px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.28s ease-in-out;
}
.slide-leave-active {
  transition: all 0.28s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}

.overlay {
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 999;
}

.bottom-sheet-container {
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  position: fixed;
  z-index: 999;
  margin-top: 50px;

  .bottom-sheet {
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: white;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .image {
        width: 70px;
        position: absolute;
        top: 45%;
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        transform: translateY(-50%);
      }

      p {
        position: absolute;
        top: 55%;
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        color: #295238;
        text-align: center;
        padding-top: 10px;
      }
      
      a{
      font-size: 36px;
      color: #fcba03;
      font-weight: bolder;
      line-height: normal;
    }

    .bottom-sheet-header {
      position: relative;
      width: 100%;
      height: 100vw;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      overflow: hidden;
      flex: 10 1;

      .icon-close {
        position: absolute;
        right: 0;
        top: 0;
        padding: 16px;
      }
    }

    .form-container {
      display: flex;
      flex: 1 1 230px;
      flex-direction: column;
      padding: 16px 16px 8px 16px;
      // min-height: 280px;

      .form-header {
        display: flex;
        font-size: 18px;
        line-height: 30px;
        height: 60px;

        .title {
          color: #202121;
          flex: 1;
          word-break: keep-all;
          overflow: hidden;
        }

        .price-container {
          width: 130px;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          color: #999999;

          .price {
            text-align: right;
          }
        }
      }

      .form-body {
        padding-top: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 0 0 0;
        align-items: center;

        .input {
          width: 100%;
          padding: 12px;
          border-radius: 2px;
          border: solid 1px #999999;

          &.name {
            height: 43px;
            margin-bottom: 12px;
          }

          &.message {
            margin-bottom: 16px;
            height: 50px;
            min-height: 50px;
            vertical-align: to-upper-case($string: "");
            resize: none;
          }
        }

        .description {
          color: #999999;
          font-size: 12px;
        }
      }
    }

    .button-bottom {
      flex: 0 0 54px;
      cursor: default;
      width: 100%;
      margin-bottom: constant(safe-area-inset-bottom);
      margin-bottom: env(safe-area-inset-bottom);
      background-color: #eaeaea;
      color: #999999;
      &.active {
        cursor: pointer;
        background-color: #ffb22c;
        color: #202121;
      }
    }
  }
}
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
</style>
