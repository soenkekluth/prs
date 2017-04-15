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
}

prs(resolver).then((val)=>{
  console.log(val);
  // => foo
});
```



## License

MIT © [Sönke Kluth](https://soenkekluth.com)
