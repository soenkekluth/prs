[![Build Status](https://travis-ci.org/soenkekluth/prs.svg?branch=master)](https://travis-ci.org/soenkekluth/prs)

# prs

alias for `new Promise`

## Install

```
$ npm install --save prs
# or
$ yarn add prs
```

## Usage

```js
const prs = require('prs');

const resolver = (resolve, reject) => {
  setTimeout(()=>{
    resolve('foo');
  }, 1000);
};

// Alias for new Promise
prs(resolver).then((val)=>{
  console.log(val);
  // => foo
});

// Alias for Promise.resolve
prs.resolve()
	.then()...
// or
prs.res()
	.then()...


// Alias for Promise.all
prs.all([prs,prs...])

```



## License

MIT © [Sönke Kluth](https://soenkekluth.com)
