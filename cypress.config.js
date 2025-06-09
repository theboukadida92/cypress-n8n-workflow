const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    baseUrl: '' // or your app URL
  }
});
