# Testing GitHub Actions w/ Cypress

This branch adds uses GitHub Actions when using Cypress in a nested monorepo using the path `rootApp/nestedApp/cypress`

## Notes:
- Be sure to only install Cypress once by adding `install:false`
- Be sure to add `working-directory` so GitHub Actions knows where to find your Cypress folder
- The config path is relative to the working directory