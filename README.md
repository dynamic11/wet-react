# WET-React UI components library

<img src="https://user-images.githubusercontent.com/11470442/145418747-6b58458d-02f5-499f-ba52-96a4cc181efa.png" alt="drawing" width="300"/>

React implementation of the Web Experience Toolkit (WET).

:warning: This project is early stages of development. We are actively working hard to implement more components.

## Build status

[![Chromatic Deployment](https://github.com/dynamic11/wet-react/actions/workflows/chromatic.yaml/badge.svg?branch=master)](https://github.com/dynamic11/wet-react/actions/workflows/chromatic.yaml)
[![Linting Check](https://github.com/dynamic11/wet-react/actions/workflows/ci-tests.yaml/badge.svg?branch=master)](https://github.com/dynamic11/wet-react/actions/workflows/ci-tests.yaml)
[![codecov](https://codecov.io/gh/dynamic11/wet-react/branch/master/graph/badge.svg?token=13E1BGWDHR)](https://codecov.io/gh/dynamic11/wet-react)
[![npm version](https://badge.fury.io/js/@dynamic11%2Freact-wet.svg)](https://badge.fury.io/js/@dynamic11%2Freact-wet)

## Storybook deployments

The Storybook build can be found here:

[![Storybook](https://img.shields.io/badge/storybook-master-gray?logo=storybook&&labelColor=blue&style=for-the-badge)](https://master--61aa819e198559003a6a1442.chromatic.com)

## Core documentation

This react component library is implemented based on the WET frontend CSS framework and React Bootstrap.

The documentation for these core projects can be found here:

[![WET CSS](https://img.shields.io/static/v1?label=%20&message=WET%20Documentation&logo=read-the-docs&color=0e4164&&style=for-the-badge)](https://wet-boew.github.io/wet-boew/index-en.html)

[![WET CSS](https://img.shields.io/static/v1?label=%20&message=React%20Bootstrap%20Docs&logo=bootstrap&color=7952b3&logoColor=white&style=for-the-badge)](https://react-bootstrap.github.io/)

## The purpose

The purpose of this package is to "Reactify" the Web Experience Toolkit (WET). This will make it faster and easier to develope applications using WET. It also removes the JQuery dependency of WET.

This project has 3 main goals:

- :rocket: make it easier to create frontend apps
- :wheelchair: have accessible components (WCAG AA)
- :books: clean and accurate documentation (Storybook)

## How to use

### Installation

The best way to consume React-Bootstrap is via the npm package which you can install with npm (or yarn if you prefer).

```shell
npm install @dynamic11/wet-react
```

### Importing Components

You can import the desired component form `@dynamic11/wet-react` as shown below

```typescript
import { Button } from '@dynamic11/wet-react';
```

### Stylesheet

WET-React doesn't ship with a specific stylesheet. It is made to be compatible with either the WET or GCWeb theme (based on Bootstrap 3). To allow for this flexibility, you can choose to import either CSS file in the HTML header of your project.

As an example, using the following file in the HTML header will give the components the GCWeb theme.

```html
<link
  rel="stylesheet"
  href="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/css/theme.min.css"
/>
```

## Development

### How to run locally

1. clone the repo to you local machine
2. open terminal inside the project directory
3. install packages using `npm install`
4. launch Storybook using `npm run storybook`
5. navigate to `http://localhost:6006` to see Storybook running based on you local code. As you save your changes, the storybook will automatically update.

### Project scripts

Here is what each script in the `package.json` does:

- `test`: runs the component tests
- `lint`: runs ESlint to check for issues
- `lint:fix`: runs ESlint to check for issues and auto fixes them
- `prettier`: runs prettier to check for code styling issues
- `prettier:fix`: runs prettier to check for code styling issues and auto fixes them
- `storybook`: spins up a dev instance of Storybook that is based on the local changes. The running application can be found at `http://localhost:6006`
- `build-storybook`: builds a static version of Storybook (not often needed)
- `chromatic`: Deploy the current code to a chromatic image and provide a sharable link
- `prepare`: Enable Git hooks
