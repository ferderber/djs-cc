import { ArgumentType } from "./argumentType";

/**
 * Options interface used to construct an argument
 */
export interface ArgumentOptions {
  name: string;
  type?: ArgumentType;
  required?: boolean;
  default?: unknown;
}
