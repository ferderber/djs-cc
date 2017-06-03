import ArgumentType = require('./argumentType');

interface ArgumentOptions {
    name: string;
    type?: ArgumentType;
    required?: boolean;
    default?: any;
}
export = ArgumentOptions;