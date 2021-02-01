const config = {};

// if (process.env.NODE_ENV !== "development") {
config.css = {
  loaderOptions: {
    postcss: {
      plugins: [
        require("postcss-plugin-px2rem")({
          rootValue: 64,
          // unitPrecision: 5,
          //propWhiteList: [],
          // propBlackList: [],
          // exclude: /(node_module)/,
          // selectorBlackList: [],
          // ignoreIdentifier: false,
          // replace: true,
          mediaQuery: false,
          minPixelValue: 3
        })
      ]
    }
  }
};
// }

module.exports = config;
