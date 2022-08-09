<template>
    <div class="attend-form">
        <img src="~@/assets/images/cat.png" class="cat" />
        <div class="form-container">
            <div class="form-header">
                <div class="title">Konfirmasi Kehadiran</div>
            </div>
                
            <form @submit.prevent="onFormSubmit">
                <div class="form-body">
                    <input class="input name" type="text" placeholder= "Nama anda" v-model="az.name"/>
                    
                    <select id="attend" class="input attend" v-model="az.attend">
                        <option value="" disabled selected>Konfirmasi kehadiran resepsi</option>
                        <option value="yes">Ya</option>
                        <option value="no">Tidak</option>
                    </select>

                    <select v-if="az.attend === 'yes'" id="pax" class="input pax" v-model="az.pax">
                        <option value="" disabled selected>Jumlah tamu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <textarea class="input wish" name="Text1" cols="40" rows="3" placeholder="Ucapan & doa untuk pengantin" v-model="az.wish"></textarea>

                    <button
                    :class="['button-bottom', { active: true }]"
                    >
                        Kirim
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../../main.js';
export default {
  name: "Form",
  data() {
    return {
        az: {
            name:'',
            attend:'',
            pax:'',
            wish:'',
            invitee:this.$route.query.kepada
        },
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
    present: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
  },
    methods: {
        onFormSubmit(event) {
            event.preventDefault()
            db.collection('families-az').add(this.az).then(() => {
                alert("Terima kasih atas konfirmasi kehadirannya.");
                this.az.name = ''
                this.az.attend = ''
                this.az.pax = ''
                this.az.wish = ''
            }).catch((error) => {
                console.log(error);
            });
        }
    },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>

.attend-form {
    padding-top: 48px;
    padding-bottom: 50px;
    padding-left: $padding-vertical;
    padding-right: $padding-vertical;
    text-align: center;
    color: #295138;
    cursor: pointer;

    .cat {
    width: 90px;
    // margin-top: 16px;
    margin-bottom: 20px;
  }

    .form-container {
        display: flex;
        flex: 1 1 230px;
        flex-direction: column;
        padding: 16px 0px 8px 0px;
        // min-height: 280px;

        .form-header {
            display: flex;
            font-size: 18px;
            line-height: 30px;
            height: 60px;
            
            .title {
                font-size: 36px;
                color: #fcba03;
                font-weight: bolder;
                line-height: normal;
                flex: 1;
                word-break: keep-all;
                overflow: visible;
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
            padding-top: 36px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 0 0 0;
            align-items: left;

            .input {
            width: 100%;
            padding: 12px;
            border-radius: 2px;
            border: solid 1px #999999;

            &.name {
                height: 43px;
                margin-bottom: 12px;
            }

            &.wish {
                font-family: Arial;
                margin-bottom: 12px;
            }

            &.attend {
                height: 43px;
                margin-bottom: 12px;
                -webkit-appearance:none;
            }
            
            &.pax {
                height: 43px;
                margin-bottom: 12px;
                -webkit-appearance:none;
            }

            &.message {
                margin-bottom: 16px;
                height: 50px;
                min-height: 50px;
                vertical-align: to-upper-case($string: "");
                resize: none;
            }

            //   .button {
            //     width: 100%;
            //     background-color: #ffb22c;
            //     color: #202121;
            //   }
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


</style>