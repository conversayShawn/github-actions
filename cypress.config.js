const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yrin2w',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
