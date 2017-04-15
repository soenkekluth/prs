const prs = require('./');

const resolver = (resolve, reject) => {
  setTimeout(()=>{
    resolve('foo');
  }, 1000);
}

prs(resolver).then((val)=>{
  console.log(val);
});
