import path from 'path';
import decamelize from 'decamelize';
import chalk from 'chalk';
import StackUtils from 'stack-utils';

export default (options = { mute: [] }) => (rawName, type, message) => {
    const name = '→ ' + decamelize(rawName, ' ');

    if (options.mute.indexOf(rawName) !== -1 || options.mute.indexOf(name) !== -1) {
        return;
    }

    if (type === 'start') {
        console.log(`\n${chalk.yellow(name)}: start`);
        return;
    }

    if (type === 'resolve') {
        console.log(`${chalk.green(name)}: done`);
        return;
    }

    if (type === 'reject') {
        // hard error
        if (message instanceof Error) {
            const stackUtils = new StackUtils({
                cwd: process.cwd(),
                internals: StackUtils.nodeInternals()
            });
            const stack = stackUtils.clean(message.stack);

            console.log(`${chalk.red(name)}: ${message.message}`);
            console.error('\n' + chalk.red(stack));
        // soft error(s)
        } else if (typeof message !== 'undefined') {
            [].concat(message).forEach(msg => {
                console.log(`${chalk.red(name)}: ${msg}`);
            });
        }

        console.log(`${chalk.red(name)}: error`);
        return;
    }

    if (type === 'info') {
        [].concat(message)
            .map(msg => {
                if (path.isAbsolute(msg)) {
                    return path.relative(process.cwd(), msg);
                }

                return msg;
            })
            .forEach(msg => {
                console.log(`${chalk.blue(name)}: ${msg}`);
            });
    }
};
