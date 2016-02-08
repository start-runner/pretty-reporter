[![npm](https://img.shields.io/npm/v/start-pretty-logger.svg?style=flat-square)](https://www.npmjs.com/package/start-pretty-logger)
[![travis](http://img.shields.io/travis/start-runner/pretty-logger.svg?style=flat-square)](https://travis-ci.org/start-runner/pretty-logger)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/pretty-logger.svg?style=flat-square)](https://codecov.io/github/start-runner/pretty-logger)
[![deps](https://img.shields.io/gemnasium/start-runner/pretty-logger.svg?style=flat-square)](https://gemnasium.com/start-runner/pretty-logger)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

Pretty logger for [Start](https://github.com/start-runner/start).

* colors
* decamelized task names
* short relative paths
* clean stack traces

![screenshot](screenshot.png)

## Install

```
npm i -S start-pretty-logger
```

## Usage

```js
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

See [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`logger(options)`

* `options` – logger options, `{ mute: [] }` by default
  * `mute` – array of task names to mute any output
