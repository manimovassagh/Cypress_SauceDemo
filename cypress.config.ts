import { defineConfig } from "cypress";

export default defineConfig({
  
  e2e: {
    baseUrl:"https://www.saucedemo.com/",
   chromeWebSecurity:false,
    setupNodeEvents(on, config): void {
      // implement node event listeners here
    },
  },
});
