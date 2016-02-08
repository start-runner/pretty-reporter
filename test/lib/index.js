import test from 'tape';

import logger from '../../lib/';

test('basic', t => {
    t.equal(
        typeof logger,
        'function',
        '1st function'
    );

    t.equal(
        typeof logger(),
        'function',
        '2nd function'
    );

    t.end();
});
