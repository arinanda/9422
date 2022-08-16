

<template>
  <div id="kyong">
    <router-view></router-view>
    <FlowerRain />
    <IntroMovie />
    <Live />
    <Divider />
    <Gallery />
    <Divider />
    <Celebrate />
    <Divider />
    <Form />
    <Divider />
    <BottomSheet
      :is-open="isOpen"
      @close="handleClose"
      v-scroll-lock="isOpen"
    />
  </div>
</template>

<script>
import IntroMovie from "./components/families-az/IntroMovie.vue";
import Live from "./components/families-az/Live.vue";
import Gallery from "./components/families-az/Gallery.vue";
import Celebrate from "./components/families-az/Celebrate.vue";
import Form from "./components/families-az/Form.vue";
import FlowerRain from "./components/FlowerRain.vue";
import BottomSheet from "./components/families-az/BottomSheet.vue";

export default {
  name: "FamiliesAZ",
  components: {
    IntroMovie,
    Live,
    Gallery,
    Celebrate,
    FlowerRain,
    BottomSheet,
    Form,
  },
  data() {
    return {
      isOpen: true,
      presents: [],
      selectedPresent: {},
      title: "Walimatul 'Urs"
    };
  },
  head: {
    title () {
        return {
          inner: this.title
        }
    },
    meta: [
      { property: "og:title", content: "Walimatul 'Urs Adib & Zulfa" },
      { property: "og:url", content: "https://zulfadib.com/families/az" },
      { property: "og:image", content: "https://cdn.jsdelivr.net/gh/arinanda/audio/thumbnail.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:type", content: "website" },
      { property: "og:description", content: "Balikpapan, 4 September 2022" },
    ]
  },
  created() {
  },
  methods: {
    handleClose() {
      this.isOpen = false;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Cafe24Oneprettynight";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  font: inherit;
}
* {
  box-sizing: border-box;
}
#kyong {
  font-family: "Cafe24Oneprettynight", sans-serif;
  max-width: 460px;
  margin: 0 auto;
  font-size: 15px;
  color: #202121;
  background-color: #fffdf9;
}
</style>
