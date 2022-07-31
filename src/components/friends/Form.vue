<template>
    <div class="attend-form">
        <img src="~@/assets/images/cat.png" class="cat" />
        <div class="form-container">
            <div class="form-header">
                <div class="title">Attendance Form</div>
            </div>
                
            <form @submit.prevent="onFormSubmit">
                <div class="form-body">
                    <input class="input name" type="text" placeholder= "Your name" v-model="friends.name"/>

                    <select id="attend" class="input attend" v-model="friends.attend">
                        <option value="" disabled selected>I'm attending:</option>
                        <option value="wedding_dinner">Wedding Ceremony & Dinner</option>
                        <option value="wedding">Wedding Ceremony</option>
                        <option value="dinner">Dinner</option>
                    </select>

                    <select id="pax" class="input pax" v-model="friends.pax">
                        <option value="" disabled selected>How many of you will attend?</option>
                        <option value="1">Just me</option>
                        <option value="2">2 of us</option>
                        <option value="3">3 of us</option>
                    </select>

                    <textarea class="input wish" name="Text1" cols="40" rows="3" placeholder="Your wishes for us" v-model="friends.wish"></textarea>

                    <button
                    :class="['button-bottom', { active: true }]"
                    >
                        Submit
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
        friends: {
            name:'',
            attend:'',
            pax:'',
            wish:''
        }
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
            db.collection('friends').add(this.friends).then(() => {
                alert("Thank you for filling the attendance form, see you later!");
                this.friends.name = ''
                this.friends.attend = ''
                this.friends.pax = ''
                this.friends.wish = ''
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
        padding: 16px 16px 8px 16px;
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