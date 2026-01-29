# AD311 W26 Configuring ESLint
**Copper Wilson** 

*AD311 - Intermediate Dev 1 Winter 2026 at NSC*
## Week 3 Assignment: Configuring ESLint in a Node.js Project

### Overview
Gain hands-on experience in setting up and configuring ESLint in a Node.js project to ensure code consistency and avoid potential bugs

### Steps Followed
- initialized Node.js project using `npm init` to create a package.json file
- installed and configured ESLint using `npm init @eslint/config`
- ESLint generated a modern `eslint.config.mjs` file
- modified the ESLint configuration to enforce semicolon usage and single quotes by adding custom `semi` and `quotes` rules
- tested by creating `testFile.js` and running `npx eslint testFile.js` 

### Observations
- I initially received a configuration error due to a typo ("alwyas" instead of "always"), but after fixing the typo, ESLint ran correctly 
- ESLint detected the missing semicolons and incorrect quotation marks based on my custom rules
- the `--fix` option was very helpful and automatically correct the problems, which could make it easier to enforce standards across a bigger project
