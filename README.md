# Testing GitHub Actions w/ Cypress

This branch uses a conditional. In this example, a specific configuration will run based on the branch name. 

## Notes:
- The intended behavior is to ignore `**/2-advanced-examples/**` test files based on a config option when using branch `ignoreSpecConfig`, otherwise all tests will run
- Be sure to only install Cypress once by adding `install:false`