const path = require("path");
const apiMocker = require("mocker-api");

module.exports = {
  devServer: {
    before(app) {
      apiMocker(app, path.resolve("./mock/index.js"), {
        proxy: {
          "/repos/(.*)": "https://api.github.com/",
        },
        changeHost: true,
      });
    },
  },
  transpileDependencies: ["uview-ui"],
};
