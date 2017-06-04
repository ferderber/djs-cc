import ArgumentType = require('./ArgumentType');
/**
 * Options interface used to construct an argument
 */
interface ArgumentOptions {
    name: string;
    type?: ArgumentType;
    required?: boolean;
    default?: any;
}
export = ArgumentOptions;