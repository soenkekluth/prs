import test from 'ava';
import prs from './dist/prs';
import now from 'performance-now';

const resolver = async resolve => {
  setTimeout(() => {
    resolve('check');
  }, 100);
};

test('prs(resolver) resolves after 100ms', async t => {
  const start = now();
  const value = await prs(resolver);
  const duration = now() - start;
  t.is(value, 'check');
  t.truthy(duration >= 100 && duration <= 120);
});

test('prs.resolve', async t => {
  const value = await prs.resolve('check');
  t.is(value, 'check');
});

test('prs.res', async t => {
  const value = await prs.res('check');
  t.is(value, 'check');
});

test('prs.compose', async t => {
  const func = value => value;
  const promise = prs.compose(func);
  const value = await promise('check');
  t.is(value, 'check');
});

test('prs.all', async t => {
  const values = await prs.all([prs(resolver), prs(resolver), prs(resolver), prs(resolver), prs(resolver)]);
  t.deepEqual(values, ['check', 'check', 'check', 'check', 'check']);
});
