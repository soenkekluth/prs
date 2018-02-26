const prs = require('./');

const resolver = resolve => {
  setTimeout(() => {
    resolve('foo');
  }, 1000);
};

prs(resolver).then(val => {
  console.log(val);
});

async function comp() {
  const func = value => value;
  const promise = prs.compose(func);
  const value = await promise('check');
  console.log('value', value);
  return value;
}

comp();
