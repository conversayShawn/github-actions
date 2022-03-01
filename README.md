# Testing GitHub Actions w/ Cypress

This branch adds [debugging log](https://docs.cypress.io/guides/references/troubleshooting#Print-DEBUG-logs) for both a single machine and parallel using 3 containers. 

## Notes:
- When running in parallel, a log will be printed for each machine/node/pod etc
- This example does not remove ASCII characters, so logs will print in several colors. This functionality can be added by adding `NO_COLOR = '1'` as an env var

