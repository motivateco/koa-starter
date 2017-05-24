module.exports = function () {
  return {
    files: [
      'src/**/*.js'
    ],

    tests: [
      'test/**/*.js'
    ],

    env: {
      type: 'node'
    },

    setup: function (wallaby) {
      require(wallaby.localProjectDir + '/test/setup')
    }
  }
}
