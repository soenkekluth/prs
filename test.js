import test from 'ava';
import prs from './index';

const resolver = (resolve, reject) => {
  setTimeout(()=>{
    resolve('check');
  }, 100);
}

test('promise resolves after 100ms', async t => {
  const value = await prs(resolver);
  t.is(value, 'check');
});
