# Testing GitHub Actions w/ Cypress

This branch adds uses a nested Cypress project. It is not uncommon to use a monorepo, but the install can be a little bit tricky

*_UPDATE_* : This branch includes some conditionals to only use a specific config based on the branch name, but will most likely removed at a later date and moved to branch [ignoreSpecConfig](https://github.com/conversaShawn/github-actions/tree/ignoreSpecConfig)

## Notes:
- Be sure to only install Cypress once by adding `install:false`
- Be sure to add `working-directory` so GitHub Actions knows where to find your Cypress folder
- If you are using a different config, be config path is relative to the working directory