# json2typescript-example

> This is a repo demonstrating the json2typscript array property decorators work outside of nuxt.

## Dependencies

Requires typescript (`tsc`) to be installed - I ran this using 3.7.4. Node is also needed, I ran this using 10.5.0.

## Setup

``` bash
# install dependencies
$ npm install
# compile ts files
$ tsc
# run index
$ node index.js
```

## Expected output:
``` bash
$ node index.js
Obj { items: [ Item { bar: 'somestring' } ] }
foo somestring
```
