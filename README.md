# Testing GitHub Actions w/ Cypress

This branch uses the [GitHub Actions `if` conditional](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idif). In this example, a specific configuration will run based on the branch name. 

## Notes:
- The intended behavior is to ignore `**/2-advanced-examples/**` test files based on a config option when using branch `ignoreSpecConfig`, otherwise all tests will run
- Be sure to only install Cypress once by adding `install:false`