module.exports = {
  publicPath: '/',
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
