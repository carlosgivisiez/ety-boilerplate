# Introduction

This is a minimal boilerplate for a Restful API. There is no restrictions on your project structure neither on the packages you choose to remove. All configurations files are on the root, and some packages setups is defined inside `package.json`.

With this project you have scripts, building, testing, validation, dependency injection, logger, decorator, dotenv, linting and pre-commit hook. Everything configurated so you can start coding.

# Pre-requisites

This project uses yarn as package manager and node to run javascript. You need to install those on your machine in order to run the project.

- [nodejs](https://nodejs.org/en/)
- [yarn](https://classic.yarnpkg.com/en/docs/install)

# Sripts

- Development: `$ yarn dev`
- Testing: 
  - $ `yarn test` to run all test
  - $ `yarn test:cov` to see your coverage
- Building: `$ yarn build`
- Linting: `$ yarn lint`

# Default packages

Here is listed all pre-installed packages. The other packages related to typescript configuration or general plugins is not listed here, but you can find them in `package.json`.

- [nodemon](https://yarnpkg.com/package/nodemon)
- [webpack](https://yarnpkg.com/package/webpack)
- [jest](https://yarnpkg.com/package/jest)
- [@hapi/joi](https://yarnpkg.com/package/@hapi/joi)
- [morgan](https://yarnpkg.com/package/morgan)
- [tsyringe](https://yarnpkg.com/package/tsyringe)
- [winston](https://yarnpkg.com/package/winston)
- [@overnight/core](https://yarnpkg.com/package/@overnightjs/core)
- [dotenv](https://yarnpkg.com/package/dotenv)
- [husky](https://yarnpkg.com/package/husky)
- [eslint](https://yarnpkg.com/package/eslint)