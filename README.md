# handler [![NPM Version](https://img.shields.io/npm/v/@cli/handler.svg?style=flat-square)](https://www.npmjs.com/package/@cli/handler) [![Travis](https://img.shields.io/travis/cli-js/handler.svg?style=flat-square)](https://travis-ci.org/cli-js/handler)

Execute functions within the context in a [cli.js](http://clijs.org) app

## Install

```
npm install @cli/handler --save
```

## Usage

```js
var alias = require('@cli/alias')
var handler = requrie('@cli/handler')
var command = require('@cli/command')

var testCommand = command(
  alias('test'),
  handler(function () {/* do something here */})
)
```
