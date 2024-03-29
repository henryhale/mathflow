import { toDegrees, toRadians } from './helpers';

/**
 * Supported operators
 */
export enum Operator {
    ADD = '+',
    SUB = '-',
    MUL = '*',
    DIV = '/',
    POW = '^'
}

/**
 * Reserved function identifiers
 * key - Multi-character keys
 * value - computation function
 */
export const FUNCTIONS: Record<string, (x: number) => number> = {
    exp: (x) => Math.exp(x),
    log: (x) => Math.log10(x),
    ln: (x) => Math.log(x),
    deg: (x) => toDegrees(x),
    rad: (x) => toRadians(x),
    sin: (x) => Math.sin(toRadians(x)),
    cos: (x) => Math.cos(toRadians(x)),
    tan: (x) => Math.tan(toRadians(x)),
    asin: (x) => toDegrees(Math.asin(x)),
    acos: (x) => toDegrees(Math.acos(x)),
    atan: (x) => toDegrees(Math.atan(x)),
    sqrt: (x) => Math.sqrt(x)
};

/**
 * Reserved variable identifiers
 */
export const CONSTANTS: Record<string, number> = {
    pi: Math.PI,
    e: Math.E
};

/**
 * Default value for variables
 */
export const DEFAULT_VALUE = 0;

/**
 * Output configuration
 */
export const config = {
    /**
     * Number of digits after the decimal point (min - 0, max - 20)
     */
    fractionDigits: 4
};
