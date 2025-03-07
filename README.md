# csv

![Build and deploy status badge](https://github.com/cipscis/csv/actions/workflows/build-and-deploy.yml/badge.svg)

## Install

Run `npm install github:cipscis/csv#semver:1.x`

## Usage

See [CSV documentation](https://cipscis.github.io/csv/)

## Development

You will need to install [Node.js](https://nodejs.org/en/) before working on this package.

1. Clone the repository using `git clone https://github.com/cipscis/base-package.git`.
2. Run `npm install` to install development dependencies.
3. Create a [`.env`](#env) file.
4. Run `npm start` to run the local server and watch CSS and JS files for changes.

This project creates five npm tasks:

* `npm run server` runs a Node.js server on the port specified in the [`.env`](#env) file, using [Express](https://expressjs.com/).

* `npm run build` compiles CSS files using [gulp-sass](https://www.npmjs.com/package/gulp-sass) and bundles JavaScript using [webpack-stream](https://www.npmjs.com/package/webpack-stream).

* `npm run watch` first runs the `build` task, then watches the relevant directories and reruns the `build` task if it sees any changes.

* `npm start` runs both the `server` and `watch` tasks simultaneously.

* `npm test` task runs any configured test suites using [Jasmine](https://jasmine.github.io/).

Usually, you will just want to run `npm start`.

### .env

The `.env` file contains the following environment variables:

* `PROJECT_NAME` `(string)`

If present, used by [Express](https://expressjs.com/) to set up redirects for emulating [GitHub Pages](#github-pages).

* `MODE` `(string 'development' | 'production')`

Used by Webpack to determine what optimisations to use and how to generate sourcemaps.

* `PORT` `(int)`

Used by [Express](https://expressjs.com/) to determine which port to use when running a local Node.js server.

An example `.env` file you can use for development is:

```
PROJECT_NAME = "csv"
MODE = "development"
PORT = "8080"
```

This file is intended to differ from environment to environment, so it is ignored by Git.

## Dependencies

None.

## Dev Dependencies

### Development

These dependencies are used when working on the project locally.

* [Node.js](https://nodejs.org/en/): Runtime environment

* [npm](https://www.npmjs.com/): Package manager

* [Gulp](https://gulpjs.com/): Task runner

* [Jasmine](https://jasmine.github.io/): Testing framework

* [sass](https://www.npmjs.com/package/sass): Compiling CSS from [Sass](https://sass-lang.com/)

* [gulp-sass](https://www.npmjs.com/package/gulp-sass): Using the `sass` compiler with Gulp

* [webpack-stream](https://www.npmjs.com/package/webpack-stream): Using [Webpack](https://webpack.js.org/) (for JavaScript dependency management) with Gulp

* [Express](https://expressjs.com/): Running a Node.js server, accessed at `http://localhost:<PORT>`

* [Concurrently](https://www.npmjs.com/package/concurrently): Running server and development build tasks concurrently

* [dotenv](https://www.npmjs.com/package/dotenv): Reading environment variables from [`.env`](#env) file

### Deploy

These dependencies are used for deploying the project to GitHub Pages.

* [checkout](https://github.com/marketplace/actions/checkout): Used to check out the repository to a workspace so it can be built

* [Deploy to GitHub Pages](https://github.com/marketplace/actions/deploy-to-github-pages): Used to deploy the project to GitHub pages once it has been built
