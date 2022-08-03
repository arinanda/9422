module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/9422/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/_var.scss";`,
      },
    },
  },
  devServer: {
    disableHostCheck: true,
  },
};
