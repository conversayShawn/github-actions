# Testing GitHub Actions w/ Cypress

This branch adds [print-env](https://docs.cypress.io/guides/guides/command-line#cypress-info) by [Gleb Bahmutov](https://glebbahmutov.com/) for both a single machine and parallel using 3 containers to detect and print environment variables to assist with debugging

## Notes:
- When running in parallel, print-env will be printed for each machine/node/pod etc
- This example does not remove ASCII characters, so print-env will print in several colors. This functionality can be added by adding `NO_COLOR = '1'` as an env var
- `print-env` can be added to an existing workflow or broken out into their own workflow