# edcli
npm package to create directories and files with basic node templates using UNIX like commands touch and mkdir.

## Overview
I work with NodeJS for server side applications and manually create modules and JS files, although simple and small I got tired of repeating the same small task so I wrote this to automatically generate common files.  This also helps to keep things consistent.

Why "edcli"?  Because, "edcli" was already taken.

## Install
Download or clone repo then:

$ cd edcli

$ npm install -g

## Usage
Use the package from the directory where you would like to generate module folders or files

Create a file:

```sh
cd my-app
edcli touch <file-name> or <file-name.js>
```

Create a module (creates directory and index.js in given directory):

```sh
edcli mkdir <module-name>
```


## Notes
Will convert camelcase names to dash (hyphen) separated names

## Example output file
```javascript
/* jshint node: true, devel: true */
'use strict';

/**
 * Required Dependencies 
 * go here
 */

const helloWorld = () => {
  console.log('Hello World');  
};

const API = {
    helloWorld
};

module.export = API;
```

## TODO:
Clean up

Add template options ie; --html, --js etc..

Add more commands

Add tests

Much more!
