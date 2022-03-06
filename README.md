# Testing GitHub Actions w/ Cypress

This repo is to test using [GitHub Actions](https://docs.github.com/en/actions) as a CI Provider with [Cypress](https://docs.cypress.io/guides/overview/why-cypress) using the official the [Cypress GitHub Actions](https://github.com/marketplace/actions/cypress-io) which includes npm installation, custom caching, additional configuration options and simplifies setup of advanced workflows with Cypress in the GitHub Actions platform.

In each branch of this repo, I will test different commonly asked questions pertaining to GitHub Actions and provide resources I found helpful.

## Installation
```
## clone this repo to a local directory
git clone https://github.com/<your-username>/reporters.git
## cd into the cloned repo
cd github-actions/
## install the node_modules
npm install
```

### [Debugging Logs](https://docs.cypress.io/guides/references/troubleshooting#Print-DEBUG-logs) 
- branch: [debuggingCypress](https://github.com/conversaShawn/github-actions/tree/debuggingCypress)

### Single Machine
- branch: [single](https://github.com/conversaShawn/github-actions/tree/single)

### Parallel, 3 Machines
- branch: [parallel](https://github.com/conversaShawn/github-actions/tree/parallel)

### Cypress Info
- branch: [cypressInfo](https://github.com/conversaShawn/github-actions/tree/cypressInfo)

### Status Checks
- branch: [statusChecks](https://github.com/conversaShawn/github-actions/tree/statusChecks)
- branch: [pullRequest](https://github.com/conversaShawn/github-actions/tree/pullRequest)

### Print Env
- branch: [printEnv](https://github.com/conversaShawn/github-actions/tree/printEnv)

### Other Random Scenarios I thought it'd be fun to test
- [Using a conditional](https://github.com/conversaShawn/github-actions/tree/conditional)
- [Ignoring a spec from config](https://github.com/conversaShawn/github-actions/tree/ignoreSpecConfig)
- [Cypress is nested (monorepo)](https://github.com/conversaShawn/github-actions/tree/nestedCypress)

#### Notes
- MAIN BRANCH DOES NOT RECORD TO THE CYPRESS DASHBOARD
- If creating project from scratch, be sure to have have `cypress.json`, `package.json`, and `package-lock.json` (or yarn or whatever you choose)