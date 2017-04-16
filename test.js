import test from 'ava';
import prs from './index';

const resolver = (resolve, reject) => {
  setTimeout(() => {
    resolve('check');
  }, 100);
}

test('prs(resolver) resolves after 100ms', async t => {
  const value = await prs(resolver);
  t.is(value, 'check');
});

test('prs.resolve (static)', async t => {
  const value = await prs.resolve('check');
  t.is(value, 'check');
});

test('prs.res (static)', async t => {
  const value = await prs.res('check');
  t.is(value, 'check');
});

test('prs.all', async t => {
  const values = await prs.all([prs(resolver), prs(resolver), prs(resolver), prs(resolver), prs(resolver)]);
  t.deepEqual(values, ['check', 'check', 'check', 'check', 'check']);
});
