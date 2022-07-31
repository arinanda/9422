<template>
  <div class="intro-movie">
    <div class="image">
      <img src="~@/assets/images/header-logo-2.png" />
    </div>
    <div class="movie">
      <img src="/intro.gif">
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroMovie",
  methods: {
    getOS() {
      var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"],
        os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = "Mac OS";
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = "iOS";
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "Windows";
      } else if (/Android/.test(userAgent)) {
        os = "Android";
      } else if (!os && /Linux/.test(platform)) {
        os = "Linux";
      }

      return os;
    },
  },
};
</script>

<style lang="scss" scoped>
.intro-movie {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 780px;
  font-size: 0;
  .image {
    display: flex;
    flex: 1;
    padding-left: $padding-vertical;
    padding-right: $padding-vertical;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .movie {
    video {
      width: 100vw;
      height: 100vw;
      max-width: 460px;
      max-height: 460px;
    }

    img {
      width: 100vw;
      height: 100vw;
      max-width: 460px;
      max-height: 460px;
    }
  }
}
</style>
