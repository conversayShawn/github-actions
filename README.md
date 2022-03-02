# Testing GitHub Actions w/ Cypress

This branch runs the example Cypress Tests on a 3 machines in GitHub Actions. 

## Notes:
- No `cypress run` run command is necessary, only a push to GitHub
- Be sure to add Cypress record key as a GitHub secret
- Be sure to use `GITHUB_TOKEN` to prevent issues with re-running pipeline via GitHub UI 