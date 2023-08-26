const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.saucedemo.com/v1/',
    viewportHeight: 1080,
    viewportWidth: 1920,
    testIsolation: false,
    chromeWebSecurity: true,
  },
})