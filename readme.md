# start-pretty-reporter

[![npm](https://img.shields.io/npm/v/start-pretty-reporter.svg?style=flat-square)](https://www.npmjs.com/package/start-pretty-reporter)
[![linux build](https://img.shields.io/travis/start-runner/pretty-reporter/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/pretty-reporter)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/pretty-reporter/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/pretty-reporter)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/pretty-reporter/master.svg?style=flat-square)](https://codecov.io/github/start-runner/pretty-reporter)
[![deps](https://img.shields.io/gemnasium/start-runner/pretty-reporter.svg?style=flat-square)](https://gemnasium.com/start-runner/pretty-reporter)

Pretty reporter for [Start](https://github.com/start-runner/start).

* colors
* decamelized task names
* short relative paths
* clean stack traces

![screenshot](screenshot.png)

## Install

```sh
npm install --save-dev start-pretty-reporter
# or
yarn add --dev start-pretty-reporter
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';
import read from 'start-read';
import babel from 'start-babel';
import write from 'start-write';

export const build = () => start(reporter())(
  files('build/'),
  clean(),
  files('lib/**/*.js'),
  read(),
  babel(),
  write('build/')
);
```

See [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`reporter(options)`

* `options` – reporter options, `{ mute: [] }` by default
  * `mute` – array of task names to mute any output from
