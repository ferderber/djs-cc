import { ArgumentType } from './ArgumentType';

/**
 * Options interface used to construct an argument
 */
export interface ArgumentOptions {
    name: string;
    type?: ArgumentType;
    required?: boolean;
    default?: any;
}