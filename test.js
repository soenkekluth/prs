import test from 'ava';
import prs from './index';
import now from 'performance-now';

const resolver = (resolve, reject) => {
  setTimeout(() => {
    resolve('check');
  }, 100);
}

test('prs(resolver) resolves after 100ms', async t => {
	const start = now();
  const value = await prs(resolver);
	const duration = now() - start;
  t.is(value, 'check');
  t.truthy(duration >= 100 && duration <= 120);
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
