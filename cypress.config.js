const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 800,
    

  e2e: {
    specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx}",
    defaultCommandTimeout: 60000,
    baseUrl:"https://automationstepbystep.com/",
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
      
    // },
  },
});
