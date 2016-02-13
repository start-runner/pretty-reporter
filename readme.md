# start-pretty-reporter

[![npm](https://img.shields.io/npm/v/start-pretty-reporter.svg?style=flat-square)](https://www.npmjs.com/package/start-pretty-reporter)
[![travis](http://img.shields.io/travis/start-runner/pretty-reporter.svg?style=flat-square)](https://travis-ci.org/start-runner/pretty-reporter)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/pretty-reporter.svg?style=flat-square)](https://codecov.io/github/start-runner/pretty-reporter)
[![deps](https://img.shields.io/gemnasium/start-runner/pretty-reporter.svg?style=flat-square)](https://gemnasium.com/start-runner/pretty-reporter)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

Pretty reporter for [Start](https://github.com/start-runner/start).

* colors
* decamelized task names
* short relative paths
* clean stack traces

![screenshot](screenshot.png)

## Install

```
npm i -S start-pretty-reporter
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

export function build() {
    return start(reporter())(
        files('build/'),
        clean(),
        files('lib/**/*.js'),
        read(),
        babel(),
        write('build/')
    );
}
```

See [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`reporter(options)`

* `options` – reporter options, `{ mute: [] }` by default
  * `mute` – array of task names to mute any output
