import test from 'tape';

import reporter from '../../lib/';

test('basic', (t) => {
  t.equal(
    typeof reporter,
    'function',
    '1st function'
  );

  t.equal(
    typeof reporter(),
    'function',
    '2nd function'
  );

  t.end();
});
