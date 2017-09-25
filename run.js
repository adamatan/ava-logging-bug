import test from 'ava';

test.before((t) => {
  // This runs before all tests
  t.log('before - 1');
});

test.before((t) => {
  // This runs after the above, but before tests
  t.log('before - 2');
});

test.after('cleanup', (t) => {
  // This runs after all tests
  t.log('after');
});

test.after.always('guaranteed cleanup', (t) => {
  // This will always run, regardless of earlier failures
  t.log('after always');
});

test.beforeEach((t) => {
  // This runs before each test
  t.log('beforeEach');
});

test.afterEach((t) => {
  // This runs after each test
  t.log('afterEach');
});

test.afterEach.always((t) => {
  // This runs after each test and other test hooks, even if they failed
  t.log('afterEachAlways');
});

test('Passing test', (t) => {
  t.log('Log from the passing test');
  t.pass();
});


test('Failing test', (t) => {
  t.log('Log from the failing test');
  t.fail();
});

