# Testing GitHub Actions w/ Cypress

This branch adds [cypress info](https://docs.cypress.io/guides/references/troubleshooting#Print-DEBUG-logs) for both a single machine and parallel using 3 containers to detect and print Cypress and OS information including the list of detected browsers

## Notes:
- When running in parallel, cypress info will be printed for each machine/node/pod etc
- This example does not remove ASCII characters, so cypress info will print in several colors. This functionality can be added by adding `NO_COLOR = '1'` as an env var
- `cypress info` can be added to an existing workflow or broken out into their own workflow