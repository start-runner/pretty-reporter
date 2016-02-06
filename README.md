[![npm](https://img.shields.io/npm/v/start-pretty-logger.svg?style=flat-square)](https://www.npmjs.com/package/start-pretty-logger)
[![travis](http://img.shields.io/travis/start-runner/pretty-logger.svg?style=flat-square)](https://travis-ci.org/start-runner/pretty-logger)
[![deps](https://img.shields.io/gemnasium/start-runner/pretty-logger.svg?style=flat-square)](https://gemnasium.com/start-runner/pretty-logger)

Pretty logger for [Start](https://github.com/start-runner/start).

* colors
* decamelized task names
* short relative paths

![screenshot](screenshot.png)

## Install

```
npm i -S start-pretty-logger
```

## Usage

```js
// tasks.js
import start from 'start';
import logger from 'start-pretty-logger';
import files from 'start-files';
import clean from 'start-clean';
import babel from 'start-babel';
import write from 'start-write';

export function build() {
    return start(logger())(
        files('build/'),
        clean(),
        files('lib/**/*.js'),
        babel(),
        write('build/')
    );
}
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start ./tasks",
  "build": "npm run task build"
}
```

## Arguments

`logger(options)`

* `options` – logger options, `{ mute: [] }` by default
  * `mute` – array of task names to mute any output
